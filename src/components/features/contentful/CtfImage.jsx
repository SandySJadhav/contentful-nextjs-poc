import NextImage from 'next/image';
import { twMerge } from 'tailwind-merge';

export const CtfImage = ({ url, width, height, title, nextImageProps }) => {
  if (!url || !width || !height) return null;

  const blurURL = new URL(url);
  blurURL.searchParams.set('w', '10');

  return (
    <NextImage
      src={url}
      width={width}
      height={height}
      alt={title || ''}
      sizes="(max-width: 1200px) 100vw, 50vw"
      placeholder="blur"
      blurDataURL={blurURL.toString()}
      {...nextImageProps}
      className={twMerge(nextImageProps?.className, 'transition-all')}
    />
  );
};
