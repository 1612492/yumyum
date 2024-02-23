import { ReactNode, createContext, useCallback, useState } from 'react';

export const StateContext = createContext<{
  currentId: number;
  likes: number[];
  dislikes: number[];
  superLikes: number[];
}>({
  currentId: 0,
  likes: [],
  dislikes: [],
  superLikes: [],
});
export const StateUpdateContext = createContext<{
  add: (action: number) => void;
  remove: (action: number, index: number) => void;
}>({
  add: () => {},
  remove: () => {},
});

type Props = {
  children: ReactNode;
};

export const Provider = ({ children }: Props) => {
  const [currentId, setCurrentId] = useState(0);
  const [likes, setLikes] = useState<number[]>([]);
  const [dislikes, setDisLikes] = useState<number[]>([]);
  const [superLikes, setSuperLikes] = useState<number[]>([]);

  const add = useCallback(
    (action: number) => {
      switch (action) {
        case 0:
          setDisLikes((arr) => [...arr, currentId]);
          break;
        case 1:
          setLikes((arr) => [...arr, currentId]);
          break;
        case 2:
          setSuperLikes((arr) => [...arr, currentId]);
          break;
      }

      setCurrentId((id) => id + 1);
    },
    [currentId]
  );

  const remove = useCallback((action: number, id: number) => {
    switch (action) {
      case 0:
        setDisLikes((arr) => arr.filter((i) => i !== id));
        break;
      case 1:
        setLikes((arr) => arr.filter((i) => i !== id));
        break;
      case 2:
        setSuperLikes((arr) => arr.filter((i) => i !== id));
        break;
    }

    setCurrentId((id) => id + 1);
  }, []);

  return (
    <StateUpdateContext.Provider value={{ add, remove }}>
      <StateContext.Provider value={{ currentId, likes, dislikes, superLikes }}>
        {children}
      </StateContext.Provider>
    </StateUpdateContext.Provider>
  );
};
