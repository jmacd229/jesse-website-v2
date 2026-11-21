import { Chip, Heading, Icon, useBreakpoint } from '@jmacd229/design-system';
import { useExperienceContext } from '../ExperienceContext';

import { AnimatePresence, motion } from 'motion/react';
import { HTMLProps, useMemo } from 'react';
import { itemIsWorkHistory } from '../utilities';
import {
  AnimatedCard,
  cardRevealVariants,
  cardWipeVariants,
  contentVariants,
} from './ExperienceDetails.animations';
import styles from './experienceDetails.module.css';
import ExperienceDetailsMobileDialog from './ExperienceDetailsMobileDialog/ExperienceDetailsMobileDialog';

const ExperienceDetails = ({ className }: HTMLProps<HTMLDivElement>) => {
  const { selectedItem, setSelectedItem } = useExperienceContext();
  const { matchesLargeUp } = useBreakpoint();

  const experienceDetailsContent = useMemo(() => {
    if (!selectedItem) {
      return undefined;
    }

    const isWorkItem = itemIsWorkHistory(selectedItem);

    return (
      <div
        id={`${selectedItem.id}-details`}
        className={styles['details-container']}
      >
        <div className={styles['sticky-header']}>
          <Heading
            id={`${selectedItem.id}-title`}
            className={styles['main-title']}
            level={4}
            displayAs={2}
          >
            <span>{selectedItem.title}</span>
            {!isWorkItem && selectedItem.version ? (
              <span
                className={styles['version']}
              >{`Version ${selectedItem.version?.toString()}`}</span>
            ) : (
              ''
            )}
          </Heading>
          {isWorkItem && (
            <Heading className={styles['role-title']} level={5} displayAs={3}>
              {selectedItem.role}
            </Heading>
          )}
        </div>
        <Chip.List className={styles['chip-list']}>
          {selectedItem.tools.map((tool) => (
            <Chip key={tool}>{tool}</Chip>
          ))}
        </Chip.List>
        {selectedItem.content}
      </div>
    );
  }, [selectedItem]);

  if (matchesLargeUp) {
    return (
      <div
        className={`${styles['experience-details']} ${className}`}
        data-open={selectedItem ? '' : undefined}
      >
        {/* Animate Card presence */}
        <AnimatePresence>
          {selectedItem && (
            <>
              {/* Overall Card wipe in/out animation */}
              <AnimatedCard
                initial="hidden"
                animate="visible"
                exit="hidden"
                elevation="0"
                variants={cardWipeVariants}
              >
                {/* Delays the Card content appearing until wipe animation is done */}
                <motion.div variants={cardRevealVariants}>
                  {/* Fades content when switching between cards*/}
                  <AnimatePresence mode="popLayout" initial={false}>
                    <motion.div
                      key={selectedItem.id}
                      variants={contentVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      {experienceDetailsContent}
                    </motion.div>
                  </AnimatePresence>
                </motion.div>
              </AnimatedCard>
              <motion.button
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={cardRevealVariants}
                className={styles['close-button']}
                onClick={() => setSelectedItem(undefined)}
                aria-label={`Close ${selectedItem.title}`}
              >
                <Icon.Close />
              </motion.button>
            </>
          )}
        </AnimatePresence>
      </div>
    );
  }

  if (!experienceDetailsContent) {
    return undefined;
  }

  return (
    <ExperienceDetailsMobileDialog>
      {experienceDetailsContent}
    </ExperienceDetailsMobileDialog>
  );
};

export default ExperienceDetails;
