import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../../src/lib/utils';
import { Slot } from '@radix-ui/react-slot';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 transform hover:scale-105',
  {
    variants: {
      variant: {
        default: 'bg-gray-900 text-gray-50 hover:bg-gray-900/90',
        gradient: 'bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500 text-black font-bold hover:shadow-2xl hover:shadow-yellow-500/30',
        outline: 'border-2 border-white/30 text-white hover:bg-white/10 hover:border-yellow-500 hover:text-yellow-500 backdrop-blur-sm',
        ghost: 'text-gray-300 hover:bg-white/10 hover:text-yellow-500',
      },
      size: {
        default: 'h-12 px-6 py-3',
        sm: 'h-10 px-4 py-2 text-sm',
        lg: 'h-14 px-8 py-4 text-lg',
        xl: 'h-16 px-12 py-6 text-xl',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
