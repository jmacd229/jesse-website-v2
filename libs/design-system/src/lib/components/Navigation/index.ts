import Nav from './Navigation';
import NavigationGroup from './NavigationGroup';
import NavigationItem from './NavigationItem';

type NavigationComponent = typeof Nav & {
  Item: typeof NavigationItem;
  Group: typeof NavigationGroup;
};

export const Navigation = Nav as NavigationComponent;
Navigation.Item = NavigationItem;
Navigation.Group = NavigationGroup;
