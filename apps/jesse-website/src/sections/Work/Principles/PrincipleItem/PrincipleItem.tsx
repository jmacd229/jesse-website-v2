import { Accordion, Card, Icon } from '@jmacd229/design-system';

import { WorkPrinciple } from '../../types';

import { HTMLProps, useState } from 'react';
import {
  expanded,
  icon,
  principleAccordion,
  principleCard,
  principleCardContainer,
  principleDescription,
  title,
} from './PrincipleItem.styles';

export type PrincipleItemProps = HTMLProps<HTMLDivElement> & {
  item: WorkPrinciple;
};

const PrincipleItem = ({ item, ...rest }: PrincipleItemProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const IconType = Icon[item.icon];
  return (
    <div
      {...rest}
      aria-expanded={isExpanded}
      className={principleCardContainer}
    >
      <Card className={principleCard} elevation="0">
        <Accordion
          className={principleAccordion}
          onClose={() => setIsExpanded(false)}
          onOpen={() => setIsExpanded(true)}
          title={<div className={title}>{item.title}</div>}
          aria-expanded={undefined}
        >
          <div className={principleDescription}>{item.description}</div>
        </Accordion>
        <IconType className={`${icon} ${isExpanded ? expanded : ''}`} />
      </Card>
    </div>
  );
};

export default PrincipleItem;
