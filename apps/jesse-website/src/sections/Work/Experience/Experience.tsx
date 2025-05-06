import {
  Animation,
  Badge,
  dynamicAnimations,
  getAnimation,
  Heading,
  OnActivateProps,
  Tree,
  useCSS,
} from '@jesse-website-v2/design-system';

import { useMemo } from 'react';
import { PROJECT_ITEMS, WORK_ITEMS } from '../constants';
import { ProjectHistoryItem, WorkHistoryItem } from '../types';
import styles from './experience.module.css';
import {
  ExperienceContextProvider,
  useExperienceContext,
} from './ExperienceContext';
import ExperienceDetails from './ExperienceDetails/ExperienceDetails';
import WorkItem from './WorkItem/WorkItem';

const SpotlightWorkNode = ({
  item,
}: {
  item: WorkHistoryItem | ProjectHistoryItem;
}) => {
  const { selectedItem, setSelectedItem } = useExperienceContext();
  return (
    <Tree.Node
      tabIndex={0}
      role="button"
      aria-expanded={selectedItem?.id === item.id}
      aria-owns={`${selectedItem?.id}-details`}
      {...OnActivateProps(() => setSelectedItem(item))}
      className={`${styles['spotlight-hover']} ${
        selectedItem?.id === item.id && styles['active']
      }`}
    >
      <WorkItem item={item} />
    </Tree.Node>
  );
};

const Experience = () => {
  const { getCSSColor } = useCSS();
  const gearAnimationData = useMemo(
    () =>
      getAnimation(
        dynamicAnimations.gearAnimation,
        getCSSColor('--primary-500'),
        getCSSColor('--neutral-700')
      ),
    [getCSSColor]
  );

  return (
    <div>
      <div className={styles['heading-container']}>
        <div className={styles['gears']}>
          <Animation
            animationConfig={{
              loop: false,
              animationData: gearAnimationData,
            }}
            loopDelay={2000}
          />
        </div>
        <Heading level={3}>Experience</Heading>
        <div className={`${styles['instructions']} small-text`}>
          Select an item below to view more info
        </div>
      </div>
      <ExperienceContextProvider>
        <div className={styles['experience-container']}>
          <div className={styles['experience-items']}>
            <Tree>
              <SpotlightWorkNode item={WORK_ITEMS.HUMI} />
              <Tree.Branch>
                <Badge
                  position="top-left"
                  content="This site!"
                  role="presentation"
                >
                  <SpotlightWorkNode item={PROJECT_ITEMS.JESSE_V2} />
                </Badge>
                <SpotlightWorkNode item={PROJECT_ITEMS.ALICIA_V2} />
              </Tree.Branch>
              <SpotlightWorkNode item={WORK_ITEMS.PRODIGY} />
              <Tree.Branch>
                <SpotlightWorkNode item={PROJECT_ITEMS.JESSE_V1} />
                <SpotlightWorkNode item={PROJECT_ITEMS.ALICIA_V1} />
              </Tree.Branch>
              <SpotlightWorkNode item={WORK_ITEMS.CANADA_LIFE} />
              <SpotlightWorkNode item={WORK_ITEMS.UWO} />
            </Tree>
          </div>
          <ExperienceDetails className={styles['experience-details']} />
        </div>
      </ExperienceContextProvider>
    </div>
  );
};

export default Experience;
