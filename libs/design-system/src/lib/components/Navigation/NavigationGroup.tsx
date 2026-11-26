import { PropsWithChildren } from 'react';
import { navGroup } from './Navigation.styles';

const NavigationGroup = ({ children }: PropsWithChildren) => (
  <ul className={navGroup}>{children}</ul>
);

export default NavigationGroup;
