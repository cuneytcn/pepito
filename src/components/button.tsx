import { cva } from 'class-variance-authority';
import { clsx } from 'clsx';

export const buttonVariants = cva(
  'inline-flex items-center justify-center gap-1.5 rounded-full text-sm font-medium ring-offset-background transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-white hover:bg-secondary',
        secondary: 'bg-secondary text-white hover:bg-secondary/90',
        link: 'text-primary hover:text-secondary underline-offset-4 hover:underline',
      },
      size: {
        sm: 'px-4 py-2',
        md: 'px-6 py-3',
        lg: 'px-8 py-4',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

export type ButtonProps<T extends React.ElementType = 'button'> = {
  as?: T;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'link';
  size?: 'sm' | 'md' | 'lg';
} & React.ComponentPropsWithoutRef<T>;

const Button = <T extends React.ElementType = 'button'>({
  as,
  variant,
  children,
  size,
  className,
  ...props
}: ButtonProps<T>) => {
  const Component = as || 'button';
  return (
    <Component
      {...props}
      className={clsx(buttonVariants({ variant, size, className }))}
    >
      {children}
    </Component>
  );
};

export default Button;

Button.displayName = 'Button';
