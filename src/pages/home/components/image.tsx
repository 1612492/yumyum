import { ImgHTMLAttributes, useEffect, useState } from 'react';

type Props = ImgHTMLAttributes<HTMLImageElement> & {
  loadImg: () => Promise<typeof import('*.jpg')>;
};

const Image = ({ loadImg, className, ...rest }: Props) => {
  const [src, setSrc] = useState<string>();

  useEffect(() => {
    loadImg().then((module) => setSrc(module.default));
  }, []);

  if (!src) return <div className={className} />;

  return <img src={src} className={className} {...rest} />;
};

export default Image;
