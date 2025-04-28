import { PropsWithChildren } from 'react';
import style from './navigation.module.css';

const NavigationGroup = ({ children }: PropsWithChildren) => (
  <div className={style[`nav-group`]} role="list">
    {children}
  </div>
);

export default NavigationGroup;
