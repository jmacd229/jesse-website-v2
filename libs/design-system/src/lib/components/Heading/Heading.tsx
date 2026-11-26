import { createElement, HTMLProps, JSX, PropsWithChildren } from 'react';
import {
  centered as centeredStyle,
  heading,
  headingContainer,
  headingShadow,
} from './Heading.styles';

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
      className={`${className} ${headingContainer} ${
        centered ? centeredStyle : ''
      }`}
    >
      {createElement(
        Tag,
        { 'aria-level': level, className: heading, ...rest },
        children,
      )}
      {level === 1 && (
        <h1 aria-hidden className={headingShadow}>
          {children}
        </h1>
      )}
    </div>
  );
};
