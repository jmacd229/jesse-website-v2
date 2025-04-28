import { HTMLProps, PropsWithChildren } from 'react';
import style from './heading.module.css';

type HeadingProps = PropsWithChildren<
  HTMLProps<HTMLDivElement> & {
    level: '1' | '2' | '3' | '4' | '5' | '6';
    centered?: boolean;
  }
>;

export const Heading = ({
  children,
  className,
  level,
  centered,
}: HeadingProps) => {
  const Tag: keyof JSX.IntrinsicElements = `h${level}`;
  return (
    <div
      className={`${className} ${style['heading-container']} ${
        centered && style['centered']
      }`}
    >
      <Tag className={style['heading']}>{children}</Tag>
      {level === '1' && (
        <h1 aria-hidden className={style['heading-shadow']}>
          {children}
        </h1>
      )}
    </div>
  );
};
