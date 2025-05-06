import { HTMLProps, PropsWithChildren, ReactNode } from 'react';
import { BadgePosition } from './types';

import styles from './badge.module.css';

type BadgeProps = PropsWithChildren<
  HTMLProps<HTMLDivElement> & {
    position: BadgePosition;
    content: ReactNode;
  }
>;

export const Badge = ({ position, content, children, ...rest }: BadgeProps) => {
  return (
    <>
      <div className={`${styles['badge']} ${styles[position]}`} {...rest}>
        {content}
      </div>
      {children}
    </>
  );
};
