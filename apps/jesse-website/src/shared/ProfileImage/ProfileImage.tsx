import { HTMLProps } from 'react';
import { imageMask, profile, rotate } from './ProfileImage.styles';

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
  <div className={`${profile} ${className}`}>
    <div className={imageMask}>
      <img className={isRotating ? rotate : ''} src={src} alt={alt} />
    </div>
  </div>
);

export default ProfileImage;
