import type { ComponentPropsWithoutRef } from 'react';

type FontSize = 'xs' | 'sm' | 'base' | 'lg' | 'xl';

interface ButtonProps extends Omit<ComponentPropsWithoutRef<'a'>, 'href'> {
  href: string;
  fontSize?: FontSize;
  uppercase?: boolean;
  variant?: 'primary' | 'custom';
}
const fontSizes: Record<FontSize, string> = {
  xs: 'text-xs', sm: 'text-sm', base: 'text-base', lg: 'text-lg', xl: 'text-xl',
};

// Navigation keeps native link behavior, including opening in a new tab.
export default function Button({
  href, title, children, fontSize = 'base', uppercase = true,
  variant = 'primary', className = '', target, rel, ...props
}: ButtonProps) {
  const style = variant === 'primary'
    ? 'inline-block text-center bg-secondary text-primary w-60 max-w-full rounded-xl px-4 py-2 font-black cursor-pointer hover:bg-secondary/88 hover:text-primary/88 active:scale-98'
    : '';
  return (
    <a {...props} href={href} title={title} target={target}
      rel={rel ?? (target === '_blank' ? 'noopener noreferrer' : undefined)}
      className={`${style} ${fontSizes[fontSize]} ${uppercase ? 'uppercase' : 'normal-case'} ${className}`}>
      {children ?? title}
    </a>
  );
}
