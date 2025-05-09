import { HTMLProps, PropsWithChildren } from 'react';
import { useAnimations } from '../../hooks';

type LinkProps = PropsWithChildren<
  {
    to: string;
    isExternal?: boolean;
  } & HTMLProps<HTMLAnchorElement>
>;

export const Link = ({ to, isExternal, children, ...rest }: LinkProps) => {
  const { areAnimationsEnabled } = useAnimations();
  const scrollBehavior = areAnimationsEnabled ? 'smooth' : 'auto';

  const scrollIntoView = (event: React.MouseEvent) => {
    event.preventDefault();
    if (to === 'home') {
      window.scrollTo({ top: 0, behavior: scrollBehavior });
    }
    document
      .querySelector(`#${to}`)
      ?.scrollIntoView({ behavior: scrollBehavior });
  };

  return isExternal ? (
    <a href={to} target="__blank" rel="noopener noreferrer">
      {children}
    </a>
  ) : (
    <a href={`#${to}`} onClick={scrollIntoView} {...rest}>
      {children}
    </a>
  );
};
