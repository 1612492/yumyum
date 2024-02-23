import { useContext, useState } from 'react';
import ListModal from './list-modal';
import MenuIcon from '../../../components/icons/menu';
import { StateContext } from '../provider';

const Header = () => {
  const [active, setActive] = useState(false);
  const { likes, superLikes } = useContext(StateContext);

  return (
    <div className="mb-4 flex justify-end">
      <button className="relative" onClick={() => setActive(true)}>
        <MenuIcon className="h-8 w-8" />
        {likes.length + superLikes.length > 0 ? (
          <span className="absolute -right-px -top-px h-3 w-3 rounded-full bg-red-500" />
        ) : null}
      </button>
      <ListModal active={active} setActive={setActive} />
    </div>
  );
};

export default Header;
