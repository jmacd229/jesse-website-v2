import { HTMLProps, PropsWithChildren } from 'react';
import style from './heading.module.css';

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

type HeadingProps = PropsWithChildren<
  HTMLProps<HTMLDivElement> & {
    level: HeadingLevel;
    /* Can be used to display a different element while still maintaining header level order via the level prop */
    displayAs?: HeadingLevel;
    centered?: boolean;
  }
>;

export const Heading = ({
  children,
  className,
  level,
  displayAs,
  centered,
  ...rest
}: HeadingProps) => {
  const Tag: keyof JSX.IntrinsicElements = `h${displayAs ?? level}`;
  return (
    <div
      className={`${className} ${style['heading-container']} ${
        centered && style['centered']
      }`}
    >
      <Tag aria-level={level} className={style['heading']} {...rest}>
        {children}
      </Tag>
      {level === 1 && (
        <h1 aria-hidden className={style['heading-shadow']}>
          {children}
        </h1>
      )}
    </div>
  );
};
