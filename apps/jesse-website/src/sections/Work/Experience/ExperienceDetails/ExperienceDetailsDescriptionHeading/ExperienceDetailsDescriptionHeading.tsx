import { Heading, Icon, IconType } from '@jmacd229/design-system';

import { PropsWithChildren } from 'react';
import styles from './experienceDetailsDescriptionHeading.module.css';

const ExperienceDetailsDescriptionHeading = ({
  children,
  centered,
  icon,
}: PropsWithChildren<{ icon?: IconType; centered?: boolean }>) => {
  const IconType = icon ? Icon[icon] : undefined;
  return (
    <div
      className={`${styles['work-item-heading']} ${
        centered && styles['centered']
      }`}
    >
      {IconType && <IconType />}
      <Heading level={6} displayAs={4}>
        {children}
      </Heading>
    </div>
  );
};

export default ExperienceDetailsDescriptionHeading;
