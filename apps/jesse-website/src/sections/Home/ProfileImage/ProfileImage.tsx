import { HTMLProps } from 'react';
import styles from './profileImage.module.css';

const ProfileImage = ({ className }: HTMLProps<HTMLDivElement>) => (
  <div
    role="img"
    aria-label="Picture of Jesse MacDougall"
    className={`${styles['profile']} ${className}`}
  />
);

export default ProfileImage;
