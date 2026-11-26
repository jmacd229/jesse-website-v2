import { PropsWithChildren } from 'react';
import { Icon, IconType } from '../../icons';
import { Link } from '../Link';
import {
  comingSoon,
  comingSoonText,
  iconText,
  navItem,
} from './Navigation.styles';

type NavigationItemProps = PropsWithChildren<{
  id: string;
  icon: IconType;
  isUnavailable?: boolean; // Used to indicate a menu item that is in progress or coming soon
}>;

const NavigationItem = ({
  id,
  icon,
  isUnavailable,
  children,
}: NavigationItemProps) => {
  const IconElement = Icon[icon];
  return (
    <li>
      <Link
        disabled={isUnavailable}
        tabIndex={isUnavailable ? -1 : 0}
        className={`${navItem} ${isUnavailable ? comingSoon : ''}`}
        to={id}
      >
        <IconElement />
        {isUnavailable && (
          <div className={[iconText, comingSoonText, 'small-text'].join(' ')}>
            In progress!
          </div>
        )}
        <div className={iconText}>{children}</div>
      </Link>
    </li>
  );
};

export default NavigationItem;
