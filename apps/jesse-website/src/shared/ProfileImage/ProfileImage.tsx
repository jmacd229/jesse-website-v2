import { HTMLProps } from 'react';
import styles from './profileImage.module.css';

type ProfileImageProps = {
  /* Allows for a subtle rotation animation on the image */
  isRotating?: boolean;
} & HTMLProps<HTMLImageElement> &
  Required<Pick<HTMLProps<HTMLImageElement>, 'src' | 'alt'>>;

const ProfileImage = ({
  className,
  src,
  alt,
  isRotating,
}: ProfileImageProps) => (
  <div className={`${styles['profile']} ${className}`}>
    <div className={styles['image-mask']}>
      <img className={isRotating ? styles['rotate'] : ''} src={src} alt={alt} />
    </div>
  </div>
);

export default ProfileImage;
