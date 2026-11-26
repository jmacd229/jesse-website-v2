import { CSSProperties, HTMLProps, PropsWithChildren, ReactNode } from 'react';
import { BadgePosition } from './types';
import { badge, badgeContent, POSITION_CLASSES } from './Badge.styles';

export type BadgeProps = PropsWithChildren<
  HTMLProps<HTMLDivElement> & {
    position: BadgePosition;
    content: ReactNode;
    offset?: { x?: number; y?: number };
  }
>;

export const Badge = ({
  position,
  content,
  children,
  offset,
  ...rest
}: BadgeProps) => {
  return (
    <>
      <div
        style={
          {
            '--badge-x-offset': offset?.x && `${offset.x}px`,
            '--badge-y-offset': offset?.y && `${offset.y}px`,
          } as CSSProperties
        }
        className={`${badge} ${POSITION_CLASSES[position]}`}
        {...rest}
      >
        <span className={badgeContent}>{content}</span>
      </div>
      {children}
    </>
  );
};
