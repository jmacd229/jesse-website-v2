import { Card } from '@jmacd229/design-system';
import { HTMLProps } from 'react';
import {
  workItemCard,
  workItemImage,
} from './ExperienceDetailsDescriptionImage.styles';

const ExperienceDetailsDescriptionImage = ({
  src,
  alt,
}: HTMLProps<HTMLImageElement>) => (
  <Card className={workItemCard} elevation="1">
    <img className={workItemImage} src={src} alt={alt} />
  </Card>
);

export default ExperienceDetailsDescriptionImage;
