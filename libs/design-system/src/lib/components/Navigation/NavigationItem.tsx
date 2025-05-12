import { PropsWithChildren } from 'react';
import { Icon, IconType } from '../../icons';
import { Link } from '../Link';
import style from './navigation.module.css';

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
    <div role="listitem">
      <Link
        disabled={isUnavailable}
        tabIndex={isUnavailable ? -1 : 0}
        className={`${style[`nav-item`]} ${
          isUnavailable && style[`coming-soon`]
        }`}
        to={id}
      >
        <IconElement />
        {isUnavailable && (
          <div
            className={[
              style[`icon-text`],
              style[`coming-soon-text`],
              'small-text',
            ].join(' ')}
          >
            In progress!
          </div>
        )}
        <div className={style[`icon-text`]}>{children}</div>
      </Link>
    </div>
  );
};

export default NavigationItem;
