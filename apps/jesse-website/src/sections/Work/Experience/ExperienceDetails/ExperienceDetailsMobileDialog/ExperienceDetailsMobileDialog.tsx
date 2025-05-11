import { Card, Icon } from '@jmacd229/design-system';
import { PropsWithChildren, useEffect, useRef } from 'react';
import { useExperienceContext } from '../../ExperienceContext';

import detailsStyles from '../experienceDetails.module.css';
import styles from './experienceDetailsMobileDialog.module.css';

const lockScroll = (isLocked: boolean) =>
  document
    .querySelector('body')
    ?.classList[isLocked ? 'add' : 'remove']('no-scroll');
const ExperienceDetailsMobileDialog = ({ children }: PropsWithChildren) => {
  const { selectedItem, setSelectedItem } = useExperienceContext();
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (dialogRef.current) {
      dialogRef.current.addEventListener('close', () => {
        setSelectedItem(undefined);
        lockScroll(false);
      });

      dialogRef.current.showModal();
      lockScroll(true);
    }
    return () => lockScroll(false);
  }, [dialogRef, setSelectedItem]);

  return (
    <dialog
      ref={dialogRef}
      className={styles['experience-details-dialog']}
      aria-labelledby={`${selectedItem?.id}-title`}
    >
      <button
        className={`${detailsStyles['close-button']} ${styles['close-button']}`}
        aria-label="Close dialog"
        onClick={() => setSelectedItem(undefined)}
      >
        <Icon.Close />
      </button>
      <Card className="flex" elevation="2">
        {children}
      </Card>
    </dialog>
  );
};

export default ExperienceDetailsMobileDialog;
