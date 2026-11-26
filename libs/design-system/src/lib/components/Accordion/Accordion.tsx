import {
  accordion,
  content,
  expanded,
  expander,
  title,
} from './Accordion.styles';
import {
  ButtonHTMLAttributes,
  PropsWithChildren,
  ReactNode,
  useState,
} from 'react';

export type AccordionProps = PropsWithChildren<
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'title'> & {
    title: ReactNode;
    onOpen?: () => void;
    onClose?: () => void;
  }
>;

export const Accordion = ({
  title: titleContent,
  children,
  className,
  onClose,
  onOpen,
  ...rest
}: AccordionProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    const newIsExpandedState = !isExpanded;
    if (newIsExpandedState === false) {
      onClose?.();
    } else {
      onOpen?.();
    }
    setIsExpanded(newIsExpandedState);
  };

  return (
    <button
      type="button"
      className={`${accordion} ${isExpanded ? expanded : ''} ${className}`}
      aria-expanded={isExpanded}
      onClick={handleToggle}
      {...rest}
    >
      <div className={title}>{titleContent}</div>
      <div className={expander}>
        <div aria-hidden={!isExpanded} className={content}>
          {children}
        </div>
      </div>
    </button>
  );
};
