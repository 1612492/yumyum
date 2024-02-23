import { Dispatch, SetStateAction, useContext } from 'react';
import List from './list';
import Modal from '../../../components/modal';
import { StateContext, StateUpdateContext } from '../provider';

type Props = {
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
};

const ListModal = ({ active, setActive }: Props) => {
  const { likes, superLikes } = useContext(StateContext);
  const { remove } = useContext(StateUpdateContext);

  return (
    <Modal active={active} setActive={setActive}>
      {superLikes.length === 0 && likes.length === 0 ? (
        <div className="mt-4 text-center text-xl font-medium">Chưa chọn được món nào</div>
      ) : (
        <>
          <List title="Món thích cực" data={superLikes} remove={(index) => remove(2, index)} />
          <List title="Món hơi thích" data={likes} remove={(index) => remove(1, index)} />
        </>
      )}
    </Modal>
  );
};

export default ListModal;
