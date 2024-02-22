import { Dispatch, ReactNode, SetStateAction, useEffect, useState } from 'react';
import XIcon from './icons/x';

type Props = {
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
};

const Modal = ({ active, setActive, children }: Props) => {
  const [isVisible, setIsVisible] = useState(false);

  const closeModal = () => {
    setIsVisible(false);
    setTimeout(() => {
      setActive(false);
    }, 300);
  };

  useEffect(() => {
    if (active) {
      setIsVisible(true);
    }
  }, [active]);

  if (!active) return null;

  return (
    <div role="dialog" aria-modal="true" className="absolute inset-0 z-50 p-4">
      <div
        style={{
          opacity: isVisible ? '1' : '0',
          visibility: isVisible ? 'visible' : 'hidden',
        }}
        className="relative h-full w-full rounded-md border-2 border-black bg-white p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-300"
      >
        <button onClick={closeModal}>
          <XIcon className="absolute right-3 top-3 h-4 w-4" />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
