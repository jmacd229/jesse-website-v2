import { HTMLAttributes, PropsWithChildren, ReactNode, useState } from 'react';
import { OnActivateProps } from '../../utilities/onActivateProps';
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
      role="button"
      aria-expanded={isExpanded}
      {...OnActivateProps(handleToggle)}
      {...rest}
    >
      <div className={styles['title']}>{title}</div>
      <div className={styles['expander']}>
        <div className={styles['content']}>{children}</div>
      </div>
    </div>
  );
};
