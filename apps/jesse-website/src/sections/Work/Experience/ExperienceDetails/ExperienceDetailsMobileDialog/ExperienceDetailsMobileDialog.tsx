import { Card, Icon } from '@jmacd229/design-system';
import { motion, useIsPresent } from 'motion/react';
import { PropsWithChildren, useEffect, useRef } from 'react';
import { useExperienceContext } from '../../ExperienceContext';

import { sheetVariants } from '../ExperienceDetails.animations';
import detailsStyles from '../experienceDetails.module.css';
import styles from './experienceDetailsMobileDialog.module.css';

const lockScroll = (isLocked: boolean) =>
  document
    .querySelector('body')
    ?.classList[isLocked ? 'add' : 'remove']('no-scroll');
const ExperienceDetailsMobileDialog = ({ children }: PropsWithChildren) => {
  const { selectedItem, setSelectedItem } = useExperienceContext();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const isPresent = useIsPresent();

  useEffect(() => {
    if (dialogRef.current) {
      // Keep the dialog open on Escape so the exit animation can play before unmount
      dialogRef.current.addEventListener('cancel', (event) => {
        event.preventDefault();
        setSelectedItem(undefined);
      });
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
    <motion.dialog
      ref={dialogRef}
      initial="hidden"
      animate="visible"
      exit="hidden"
      data-exiting={isPresent ? undefined : ''}
      variants={sheetVariants}
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
    </motion.dialog>
  );
};

export default ExperienceDetailsMobileDialog;
