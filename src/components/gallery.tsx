import clsx from 'clsx';
import { foods } from '../data';
import dislike from '../images/dislike.svg';
import like from '../images/like.svg';
import superLike from '../images/super-like.svg';
import Button from './button';

const actions = [
  { name: 'Ngán', image: dislike },
  { name: 'Cũng được', image: like },
  { name: 'Thèm', image: superLike },
];

type Props = {
  likes: number[];
  dislikes: number[];
  superLikes: number[];
  onSelect: (action: number) => void;
};

const Gallery = ({ likes, dislikes, superLikes, onSelect }: Props) => {
  return (
    <div className="flex flex-1 flex-col justify-between">
      <div className="relative aspect-square bg-white">
        {foods.map(({ name, image }, index) => (
          <div
            style={{ zIndex: foods.length - index }}
            className={clsx(
              'absolute inset-0',
              likes.includes(index) && 'animate-slide-right',
              dislikes.includes(index) && 'animate-slide-left',
              superLikes.includes(index) && 'animate-slide-up'
            )}
          >
            <img
              key={index}
              src={image}
              alt="food"
              className="h-full w-full rounded-md border-2 border-black object-cover shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            />
            <div className="absolute bottom-4 left-4 w-fit rounded-lg border-2 border-black bg-purple-400 px-4 py-2 text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="text-xl font-medium">{name}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 grid grid-cols-3 gap-x-6">
        {actions.map(({ name, image }, index) => (
          <Button key={index} onClick={() => onSelect(index)}>
            <img src={image} alt="emoji" className="mx-auto w-10" />
            <div className="mt-2">{name}</div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
