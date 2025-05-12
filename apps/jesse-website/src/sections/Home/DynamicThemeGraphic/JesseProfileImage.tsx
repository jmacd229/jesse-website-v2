import jesseImg from '../../../assets/images/jesse.png';
import ProfileImage from '../../../shared/ProfileImage/ProfileImage';

const JesseProfileImage = ({ className }: { className?: string }) => (
  <ProfileImage
    className={className}
    alt="Picture of Jesse MacDougall"
    src={jesseImg}
  />
);

export default JesseProfileImage;
