import { PropsWithChildren } from 'react';
import { Icon, IconType } from '../../icons';
import { Link } from '../Link';
import style from './navigation.module.css';

type NavigationItemProps = PropsWithChildren<{
  id: string;
  icon: IconType;
}>;

const NavigationItem = ({ id, icon, children }: NavigationItemProps) => {
  const IconElement = Icon[icon];
  return (
    <div role="listitem">
      <Link role="link" className={style[`nav-item`]} to={id}>
        <IconElement />
        <div className={style[`icon-text`]}>{children}</div>
      </Link>
    </div>
  );
};

export default NavigationItem;
