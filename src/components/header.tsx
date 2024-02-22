import { useState } from 'react';
import Modal from './modal';
import MenuIcon from './icons/menu';
import { foods } from '../data';

type Props = {
  likes: number[];
  superLikes: number[];
};

const Header = ({ likes, superLikes }: Props) => {
  const [active, setActive] = useState(false);

  return (
    <div className="mb-4 flex justify-end">
      <button onClick={() => setActive(true)}>
        <MenuIcon className="h-8 w-8" />
      </button>
      <Modal active={active} setActive={setActive}>
        {superLikes.length === 0 && likes.length === 0 ? (
          <div className="mt-4 text-center text-xl font-medium">Chưa chọn được món nào</div>
        ) : null}
        {superLikes.length > 0 ? (
          <div>
            <div className="w-fit border-b-4 border-black text-xl font-medium">Món thích cực</div>
            <ul className="ml-8 mt-2 list-disc">
              {superLikes.map((index) => (
                <li key={index}>{foods[index].name}</li>
              ))}
            </ul>
          </div>
        ) : null}
        {likes.length > 0 ? (
          <div>
            <div className="mt-4 w-fit border-b-4 border-black text-xl font-medium">
              Món hơi thích
            </div>
            <ul className="ml-8 mt-2 list-disc">
              {likes.map((index) => (
                <li key={index}>{foods[index].name}</li>
              ))}
            </ul>
          </div>
        ) : null}
      </Modal>
    </div>
  );
};

export default Header;
