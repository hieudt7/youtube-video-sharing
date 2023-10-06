import { tv } from 'tailwind-variants';

export const headerStyles = tv({
  slots: {
    headerWrapper: 'h-16 bg-purple-primary flex flex-row justify-between items-center px-6',
    searchWrapper: 'max-w-[600px] w-full',
  },
});
