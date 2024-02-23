import TrashIcon from '../../../components/icons/trash';
import { foods } from '../../../data';

type Props = {
  title: string;
  data: number[];
  remove: (index: number) => void;
};

const List = ({ title, data, remove }: Props) => {
  if (data.length <= 0) return null;

  return (
    <div className="mt-4">
      <div className="w-fit border-b-2 border-black text-xl font-medium">{title}</div>
      <ul className="mt-2">
        {data.map((index) => (
          <li key={index} className="mt-2 flex items-center justify-between">
            <span>&bull; {foods[index].name}</span>
            <button onClick={() => remove(index)}>
              <TrashIcon className="h-5 w-5" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
