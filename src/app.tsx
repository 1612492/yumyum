import { useState } from 'react';
import Card from './components/card';
import Header from './components/header';
import Gallery from './components/gallery';
import Empty from './components/empty';
import { foods } from './data';

const App = () => {
  const [selectedId, setSelectedId] = useState(0);
  const [likes, setLikes] = useState<number[]>([]);
  const [dislikes, setDisLikes] = useState<number[]>([]);
  const [superLikes, setSuperLikes] = useState<number[]>([]);

  const dislike = () => {
    setDisLikes((arr) => [...arr, selectedId]);
    setSelectedId((id) => id + 1);
  };

  const like = () => {
    setLikes((arr) => [...arr, selectedId]);
    setSelectedId((id) => id + 1);
  };

  const superLike = () => {
    setSuperLikes((arr) => [...arr, selectedId]);
    setSelectedId((id) => id + 1);
  };

  const select = (action: number) =>
    action === 0 ? dislike() : action === 1 ? like() : superLike();

  return (
    <Card>
      <Header likes={likes} superLikes={superLikes} />
      {selectedId < foods.length ? (
        <Gallery
          likes={likes}
          dislikes={dislikes}
          superLikes={superLikes}
          onSelect={(action) => select(action)}
        />
      ) : (
        <Empty />
      )}
    </Card>
  );
};

export default App;
