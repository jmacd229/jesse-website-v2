import { Chip, Heading, Icon, useBreakpoint } from '@jmacd229/design-system';
import { useExperienceContext } from '../ExperienceContext';

import { AnimatePresence, motion } from 'motion/react';
import {
  Children,
  Fragment,
  HTMLProps,
  isValidElement,
  PropsWithChildren,
  ReactNode,
  useMemo,
} from 'react';
import { itemIsWorkHistory } from '../utilities';
import {
  AnimatedCard,
  AnimatedChip,
  cardWipeVariants,
  chipSequenceVariants,
  chipVariants,
  closeButtonVariants,
  headerVariants,
  itemVariants,
  sequenceVariants,
} from './ExperienceDetails.animations';
import styles from './experienceDetails.module.css';
import ExperienceDetailsDescriptionHeading from './ExperienceDetailsDescriptionHeading/ExperienceDetailsDescriptionHeading';
import ExperienceDetailsMobileDialog from './ExperienceDetailsMobileDialog/ExperienceDetailsMobileDialog';

// Convert dynamic content to key-able sections to allow for staggered animations
const toSections = (content: ReactNode) =>
  Children.toArray(
    isValidElement<PropsWithChildren>(content)
      ? content.props.children
      : content,
  ).reduce<ReactNode[][]>((sections, child) => {
    const isHeading =
      isValidElement(child) &&
      child.type === ExperienceDetailsDescriptionHeading;
    if (isHeading || !sections.length) {
      sections.push([child]);
    } else {
      sections[sections.length - 1].push(child);
    }
    return sections;
  }, []);

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
        <Fragment key={selectedItem.id}>
          <motion.div
            className={styles['sticky-header']}
            variants={headerVariants}
          >
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
          </motion.div>
          <motion.div variants={chipSequenceVariants}>
            <Chip.List className={styles['chip-list']}>
              {selectedItem.tools.map((tool) => (
                <AnimatedChip key={tool} variants={chipVariants}>
                  {tool}
                </AnimatedChip>
              ))}
            </Chip.List>
          </motion.div>
          <motion.div variants={sequenceVariants}>
            {toSections(selectedItem.content).map((section, index) => (
              <motion.div key={index} variants={itemVariants}>
                {section}
              </motion.div>
            ))}
          </motion.div>
        </Fragment>
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
                {experienceDetailsContent}
              </AnimatedCard>
              <motion.button
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={closeButtonVariants}
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

  return (
    <AnimatePresence>
      {experienceDetailsContent && (
        <ExperienceDetailsMobileDialog>
          {experienceDetailsContent}
        </ExperienceDetailsMobileDialog>
      )}
    </AnimatePresence>
  );
};

export default ExperienceDetails;
