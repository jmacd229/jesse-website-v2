import { HTMLAttributes, PropsWithChildren, ReactNode, useState } from 'react';
import styles from './accordion.module.css';

export type AccordionProps = PropsWithChildren<
  Omit<HTMLAttributes<HTMLDivElement>, 'title'> & {
    title: ReactNode;
    onOpen?: () => void;
    onClose?: () => void;
  }
>;

export const Accordion = ({
  title,
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
    <div
      className={`${styles['accordion']} ${
        isExpanded && styles['expanded']
      } ${className}`}
      tabIndex={0}
      onClick={handleToggle}
      role="button"
      aria-expanded={isExpanded}
      onKeyDown={(e) => {
        if (e.key === ' ' || e.key === 'Enter') {
          e.preventDefault(); // prevent scrolling when pressing space
          handleToggle();
        }
      }}
      {...rest}
    >
      <div className={styles['title']}>{title}</div>
      <div className={styles['expander']}>
        <div className={styles['content']}>{children}</div>
      </div>
    </div>
  );
};
