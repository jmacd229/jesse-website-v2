import { Card } from '@jmacd229/design-system';
import { HTMLProps } from 'react';
import styles from './ExperienceDetailsDescriptionImage.module.css';

const ExperienceDetailsDescriptionImage = ({
  src,
  alt,
}: HTMLProps<HTMLImageElement>) => (
  <Card className={styles['work-item-card']} elevation="1">
    <img className={styles['work-item-image']} src={src} alt={alt} />
  </Card>
);

export default ExperienceDetailsDescriptionImage;
