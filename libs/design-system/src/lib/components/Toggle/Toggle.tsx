import { HTMLProps, ReactNode, useState } from 'react';
import styles from './toggle.module.css';

type ToggleProps = HTMLProps<HTMLDivElement> & {
  onToggle?: ({ isActive }: { isActive: boolean }) => void;
  initialState?: boolean;
  labelValue: string | { enabled: string; disabled: string };
  hideLabel?: boolean;
  display: { enabled: ReactNode; disabled: ReactNode };
};

const isBasicLabel = (label: ToggleProps['labelValue']): label is string =>
  typeof label === 'string';

export const Toggle = ({
  className,
  display,
  onToggle,
  initialState,
  labelValue,
  hideLabel,
  ...rest
}: ToggleProps) => {
  const [isActive, setIsActive] = useState(!!initialState);

  const handleToggle = () => {
    const newState = !isActive;
    onToggle?.({ isActive: newState });
    setIsActive(newState);
  };

  return (
    <div
      {...rest}
      onClick={handleToggle}
      onKeyDown={(e) => {
        if (e.key === ' ' || e.key === 'Enter') {
          e.preventDefault(); // prevent scrolling when pressing space
          handleToggle();
        }
      }}
      className={`${styles['switch-container']} ${
        isActive && styles['active']
      } ${className}`}
    >
      <div
        tabIndex={0}
        role="switch"
        aria-checked={isActive}
        className={styles['switch-handle']}
      >
        {isActive ? display.enabled : display.disabled}
        <div className={`${styles['label']} ${!!hideLabel && 'sr-only'}`}>
          {isBasicLabel(labelValue)
            ? labelValue
            : labelValue[isActive ? 'enabled' : 'disabled']}
        </div>
        <div className={styles['touch-target']}></div>
      </div>
    </div>
  );
};
