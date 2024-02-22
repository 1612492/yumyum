import { HTMLAttributes } from 'react';

const Button = (props: HTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className="rounded-md border-2 border-black bg-white py-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
      {...props}
    />
  );
};

export default Button;
