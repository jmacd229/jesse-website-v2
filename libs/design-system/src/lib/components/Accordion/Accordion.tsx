import {
  ButtonHTMLAttributes,
  PropsWithChildren,
  ReactNode,
  useState,
} from 'react';
import styles from './accordion.module.css';

export type AccordionProps = PropsWithChildren<
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'title'> & {
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
    <button
      type="button"
      className={`${styles['accordion']} ${
        isExpanded && styles['expanded']
      } ${className}`}
      aria-expanded={isExpanded}
      onClick={handleToggle}
      {...rest}
    >
      <div className={styles['title']}>{title}</div>
      <div className={styles['expander']}>
        <div aria-hidden={!isExpanded} className={styles['content']}>
          {children}
        </div>
      </div>
    </button>
  );
};
