import { PropsWithChildren } from 'react';
import style from './navigation.module.css';

const NavigationGroup = ({ children }: PropsWithChildren) => (
  <ul className={style[`nav-group`]}>{children}</ul>
);

export default NavigationGroup;
