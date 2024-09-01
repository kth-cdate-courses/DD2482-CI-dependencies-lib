import { ComponentProps } from 'react';
import { cn } from './cn';

export function Button({ className, children }: ComponentProps<'button'>) {
  return (
    <button
      className={cn('p-4 bg-orange-500 text-white rounded-lg', className)}
    >
      {children}
    </button>
  );
}

export default Button;
