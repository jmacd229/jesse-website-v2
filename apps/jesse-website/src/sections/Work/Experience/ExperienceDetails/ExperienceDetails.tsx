import {
  Card,
  Chip,
  Heading,
  Icon,
  useAnimations,
  useBreakpoint,
} from '@jmacd229/design-system';
import { useExperienceContext } from '../ExperienceContext';

import { HTMLProps, useEffect, useMemo } from 'react';
import { WORK_ITEMS } from '../../constants';
import { itemIsWorkHistory } from '../utilities';
import styles from './experienceDetails.module.css';
import ExperienceDetailsMobileDialog from './ExperienceDetailsMobileDialog/ExperienceDetailsMobileDialog';

const ExperienceDetails = ({ className }: HTMLProps<HTMLDivElement>) => {
  const { selectedItem, setSelectedItem } = useExperienceContext();
  const { matchesLargeUp } = useBreakpoint();
  const { areAnimationsEnabled } = useAnimations();

  // Auto select the first item for users with animations disabled. This reduces the motion of expanding and collapsing the details panel
  useEffect(() => {
    if (matchesLargeUp && !areAnimationsEnabled && selectedItem === undefined) {
      setSelectedItem(Object.values(WORK_ITEMS)[0]);
    }
  }, [areAnimationsEnabled, matchesLargeUp, selectedItem, setSelectedItem]);

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

  if (!experienceDetailsContent) {
    return undefined;
  }

  if (matchesLargeUp) {
    return (
      <Card
        elevation="0"
        className={`${styles['experience-details']} ${className}`}
      >
        {/* Only shows the button to close the panel if animations are enabled. Again to reduce motion from closing */}
        {areAnimationsEnabled && (
          <button
            className={styles['close-button']}
            onClick={() => setSelectedItem(undefined)}
            aria-label={`Close ${selectedItem?.title}`}
          >
            <Icon.Close />
          </button>
        )}
        <div>{experienceDetailsContent}</div>
      </Card>
    );
  }

  return (
    <ExperienceDetailsMobileDialog>
      {experienceDetailsContent}
    </ExperienceDetailsMobileDialog>
  );
};

export default ExperienceDetails;
