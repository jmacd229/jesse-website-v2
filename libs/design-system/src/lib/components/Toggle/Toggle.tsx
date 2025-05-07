import {
  HTMLProps,
  ReactNode,
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
} from 'react';
import { OnActivateProps } from '../../utilities/onActivateProps';
import styles from './toggle.module.css';
import { centerLabel, getCurrentRemRatio, isBasicLabel } from './utilities';

export type ToggleProps = HTMLProps<HTMLDivElement> & {
  onToggle?: ({ isActive }: { isActive: boolean }) => void;
  initialState?: boolean;
  labelValue: string | { enabled: string; disabled: string };
  hideLabel?: boolean;
  display: { enabled: ReactNode; disabled: ReactNode };
};

export const Toggle = ({
  className,
  display,
  onToggle,
  initialState,
  labelValue,
  hideLabel,
  ...rest
}: ToggleProps) => {
  const id = useId();
  const [isActive, setIsActive] = useState(!!initialState);
  const lastLabelPosition = useRef<number>(0);
  const labelRef = useRef<HTMLDivElement>(null);
  const switchRef = useRef<HTMLDivElement>(null);

  const handleToggle = useCallback(() => {
    const newState = !isActive;
    onToggle?.({ isActive: newState });
    setIsActive(newState);
  }, [isActive, onToggle]);

  useEffect(() => {
    if (hideLabel || !labelRef.current || !switchRef.current) {
      return;
    }
    const ratio = getCurrentRemRatio();

    // Gets the width of the label in REM
    const staticWidth = labelRef.current.getBoundingClientRect().width / ratio;
    // We then remove a temporary class that is used for calculating the initial width of the label
    labelRef.current?.classList.remove(styles['loading']);
    // After giving the DOM a ms to update with the removed class, then we can add animations back onto the label
    // Waiting for this ensures that the user's don't see a flash of the label on screen when the page first loads
    setTimeout(() => {
      labelRef.current?.classList.add(styles['loaded']);
    });

    const calculateLabelPosition = () => {
      const lastWindowWidth = centerLabel(
        labelRef.current,
        staticWidth,
        getCurrentRemRatio(),
        lastLabelPosition.current
      );
      // Store the value of the last window width
      // This way the function can return without re-calculating the label position if the screen has not been resized
      if (lastWindowWidth !== undefined) {
        lastLabelPosition.current = lastWindowWidth;
      }
    };

    // Initial label positioning on first render
    calculateLabelPosition();

    // Re-calc the label position on hover
    switchRef.current.addEventListener('mouseover', calculateLabelPosition);

    return () =>
      window.removeEventListener('mouseover', calculateLabelPosition);
  }, [labelRef, hideLabel]);

  return (
    <div
      ref={switchRef}
      {...rest}
      className={`${styles['switch-container']} ${
        isActive && styles['active']
      } ${className}`}
      tabIndex={0}
      role="switch"
      {...OnActivateProps(handleToggle)}
      aria-labelledby={`toggle-label-${id}`}
      aria-checked={isActive}
    >
      <div className={styles['switch-handle']}>
        {isActive ? display.enabled : display.disabled}
        {/* loading is a temporary class used for calculating the label width on first render */}
        <div
          id={`toggle-label-${id}`}
          className={`${styles['label']} ${
            hideLabel ? 'sr-only' : styles['loading']
          }`}
          ref={labelRef}
        >
          {isBasicLabel(labelValue)
            ? labelValue
            : labelValue[isActive ? 'enabled' : 'disabled']}
        </div>
        <div className={styles['touch-target']}></div>
      </div>
    </div>
  );
};
