import { HTMLAttributes, PropsWithChildren } from 'react';
import style from './card.module.css';

export type CardProps = PropsWithChildren<{
  elevation: '0' | '1' | '2' | '3';
}> &
  HTMLAttributes<HTMLDivElement>;

export const Card = ({ children, elevation, ...rest }: CardProps) => {
  return (
    <div
      {...rest}
      className={`${style['card']} elevation-${elevation} ${rest.className}`}
    >
      {children}
    </div>
  );
};
