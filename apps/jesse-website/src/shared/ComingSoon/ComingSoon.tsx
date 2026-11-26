import {
  Animation,
  Card,
  dynamicAnimations,
  getAnimation,
  Heading,
  useCSS,
} from '@jmacd229/design-system';

import { useMemo } from 'react';
import henryImg from '../../assets/images/henry.webp';
import ProfileImage from '../ProfileImage/ProfileImage';
import {
  comingSoonCard,
  comingSoonContainer,
  hammer,
} from './ComingSoon.styles';

const ComingSoon = () => {
  const { getCSSColor } = useCSS();
  const hammerAnimationData = useMemo(
    () =>
      getAnimation(
        dynamicAnimations.hammerAnimation,
        getCSSColor('--neutral-700'),
        getCSSColor('--primary-500'),
        getCSSColor('--neutral-500'),
        getCSSColor('--neutral-200'),
      ),
    [getCSSColor],
  );

  return (
    <div className={comingSoonContainer}>
      <ProfileImage src={henryImg} alt="A Boston Terrier dog" isRotating />
      <Heading centered level={3} displayAs={2}>
        More Coming Soon
      </Heading>
      <Card className={comingSoonCard} elevation="1">
        This section of the site is not yet available. I'm eager to deliver this
        content so please check back soon!
        <Animation
          className={hammer}
          animationConfig={{
            loop: false,
            animationData: hammerAnimationData,
          }}
          loopDelay={4000}
        />
      </Card>
    </div>
  );
};

export default ComingSoon;
