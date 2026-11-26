import { Badge, Card, Icon } from '@jmacd229/design-system';
import { motion, useIsPresent } from 'motion/react';
import { PropsWithChildren, useEffect, useRef } from 'react';
import { useExperienceContext } from '../../ExperienceContext';

import { sheetVariants } from '../ExperienceDetails.animations';
import { closeButton } from '../ExperienceDetails.styles';
import {
  card,
  experienceDetailsDialog,
} from './ExperienceDetailsMobileDialog.styles';

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
      className={experienceDetailsDialog}
      aria-labelledby={`${selectedItem?.id}-title`}
    >
      <button
        className={closeButton}
        aria-label="Close dialog"
        onClick={() => setSelectedItem(undefined)}
      >
        <Icon.Close />
      </button>
      <Card elevation="2" className={card}>
        {selectedItem?.badge && <Badge {...selectedItem.badge.mobile} />}
        {children}
      </Card>
    </motion.dialog>
  );
};

export default ExperienceDetailsMobileDialog;
