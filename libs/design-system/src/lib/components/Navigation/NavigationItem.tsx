import { PropsWithChildren } from 'react';
import { Icon, IconType } from '../../icons';
import style from './navigation.module.css';

type NavigationItemProps = PropsWithChildren<{
  icon: IconType;
}>;

const NavigationItem = ({ icon, children }: NavigationItemProps) => {
  const IconElement = Icon[icon];
  return (
    <div role="listitem">
      <a className={style[`nav-item`]} href="#">
        <IconElement aria-hidden="true" />
        <div className={style[`icon-text`]}>{children}</div>
      </a>
    </div>
  );
};

export default NavigationItem;
