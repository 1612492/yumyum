import { HTMLAttributes } from 'react';

const Card = (props: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className="relative flex h-full w-full flex-col overflow-x-hidden border-2 border-black bg-white bg-[radial-gradient(#cacbce_1px,transparent_1px)] p-4 [background-size:16px_16px] sm:h-[36rem] sm:w-[24rem] sm:rounded-md sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
      {...props}
    />
  );
};

export default Card;
