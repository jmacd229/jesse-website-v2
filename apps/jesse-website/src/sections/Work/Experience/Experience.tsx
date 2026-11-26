import {
  Animation,
  dynamicAnimations,
  getAnimation,
  Heading,
  Tree,
  useCSS,
} from '@jmacd229/design-system';

import { useMemo } from 'react';
import { PROJECT_ITEMS, WORK_ITEMS } from '../constants';
import { ProjectHistoryItem, WorkHistoryItem } from '../types';

import {
  ExperienceContextProvider,
  useExperienceContext,
} from './ExperienceContext';
import ExperienceDetails from './ExperienceDetails/ExperienceDetails';
import WorkItem from './WorkItem/WorkItem';
import {
  active,
  experienceContainer,
  experienceDetails,
  experienceItems,
  gears,
  headingContainer,
  instructions,
  spotlightHover,
} from './Experience.styles';

const SpotlightWorkNode = ({
  item,
}: {
  item: WorkHistoryItem | ProjectHistoryItem;
}) => {
  const { selectedItem, setSelectedItem } = useExperienceContext();
  return (
    <Tree.Node
      badge={item.badge?.desktop}
      aria-expanded={selectedItem?.id === item.id}
      aria-owns={`${selectedItem?.id}-details`}
      onClick={() => setSelectedItem(item)}
      className={`${spotlightHover} ${
        selectedItem?.id === item.id ? active : ''
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
        getCSSColor('--neutral-700'),
      ),
    [getCSSColor],
  );

  return (
    <div>
      <div className={headingContainer}>
        <div className={gears}>
          <Animation
            animationConfig={{
              loop: false,
              animationData: gearAnimationData,
            }}
            loopDelay={2000}
          />
        </div>
        <Heading level={3}>Experience</Heading>
        <div className={`${instructions} small-text`}>
          Select an item below to view more info
        </div>
      </div>
      <ExperienceContextProvider>
        <div className={experienceContainer}>
          <div className={experienceItems}>
            <Tree>
              <SpotlightWorkNode item={WORK_ITEMS.EMPLOYMENT_HERO} />
              <Tree.Branch>
                <SpotlightWorkNode item={PROJECT_ITEMS.AMPLIFY} />
                <SpotlightWorkNode item={PROJECT_ITEMS.SPIN_TOOLS} />
                <SpotlightWorkNode item={PROJECT_ITEMS.JESSE_V2} />
              </Tree.Branch>
              <SpotlightWorkNode item={WORK_ITEMS.HUMI} />
              <Tree.Branch>
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
          <ExperienceDetails className={experienceDetails} />
        </div>
      </ExperienceContextProvider>
    </div>
  );
};

export default Experience;
