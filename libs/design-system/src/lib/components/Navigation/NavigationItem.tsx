import { PropsWithChildren } from 'react';
import { Icon, IconType } from '../../icons';
import style from './navigation.module.css';

type NavigationItemProps = PropsWithChildren<{
  id: string;
  icon: IconType;
}>;

const scrollIntoView = (id: string) => {
  if (id === 'home') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  document.querySelector(`#${id}`)?.scrollIntoView({ behavior: 'smooth' });
};

const NavigationItem = ({ id, icon, children }: NavigationItemProps) => {
  const IconElement = Icon[icon];

  return (
    <div role="listitem">
      <button
        role="link"
        className={style[`nav-item`]}
        onClick={() => scrollIntoView(id)}
      >
        <IconElement />
        <div className={style[`icon-text`]}>{children}</div>
      </button>
    </div>
  );
};

export default NavigationItem;
