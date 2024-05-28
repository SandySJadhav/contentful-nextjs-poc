import { twMerge } from 'tailwind-merge';

export const Container = ({ className, ...props }) => {
  return <div className={twMerge('mx-auto max-w-8xl px-4', className)} {...props} />;
};
