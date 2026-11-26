import { HTMLAttributes, PropsWithChildren } from 'react';
import { card } from './Card.styles';

export type CardProps = PropsWithChildren<{
  elevation: '0' | '1' | '2' | '3';
}> &
  HTMLAttributes<HTMLDivElement>;

export const Card = ({ children, elevation, ...rest }: CardProps) => {
  return (
    <div
      {...rest}
      className={`${card} elevation-${elevation} ${rest.className}`}
    >
      {children}
    </div>
  );
};
