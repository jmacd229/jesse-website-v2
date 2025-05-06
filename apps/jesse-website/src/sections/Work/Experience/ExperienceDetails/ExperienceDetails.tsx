import {
  Card,
  Chip,
  Heading,
  Icon,
  useBreakpoint,
} from '@jesse-website-v2/design-system';
import { useExperienceContext } from '../ExperienceContext';

import { HTMLProps, useMemo } from 'react';
import { itemIsWorkHistory } from '../utilities';
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
        <button
          className={styles['close-button']}
          onClick={() => setSelectedItem(undefined)}
          aria-label={`Close ${selectedItem?.title}`}
        >
          <Icon.Close />
        </button>
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
