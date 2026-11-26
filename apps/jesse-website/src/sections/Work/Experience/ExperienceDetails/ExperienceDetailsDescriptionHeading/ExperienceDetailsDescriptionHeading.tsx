import { Heading, Icon, IconType } from '@jmacd229/design-system';

import { PropsWithChildren } from 'react';
import {
  centeredHeading,
  workItemHeading,
} from './ExperienceDetailsDescriptionHeading.styles';

const ExperienceDetailsDescriptionHeading = ({
  children,
  centered,
  icon,
}: PropsWithChildren<{ icon?: IconType; centered?: boolean }>) => {
  const IconType = icon ? Icon[icon] : undefined;
  return (
    <div className={`${workItemHeading} ${centered ? centeredHeading : ''}`}>
      {IconType && <IconType />}
      <Heading level={6} displayAs={4}>
        {children}
      </Heading>
    </div>
  );
};

export default ExperienceDetailsDescriptionHeading;
