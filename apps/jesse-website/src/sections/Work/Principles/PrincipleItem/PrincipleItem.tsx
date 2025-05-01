import { Accordion, Card, Icon } from '@jesse-website-v2/design-system';

import { WorkPrinciple } from '../../types';

import { HTMLProps, useState } from 'react';
import styles from './principleItem.module.css';

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
      className={styles['principle-card-container']}
    >
      <Card className={styles['principle-card']} elevation="0">
        <Accordion
          className={styles['principle-accordion']}
          onClose={() => setIsExpanded(false)}
          onOpen={() => setIsExpanded(true)}
          title={<div className={styles['title']}>{item.title}</div>}
          aria-expanded={undefined}
        >
          <div className={styles['principle-description']}>
            {item.description}
          </div>
        </Accordion>
        <IconType
          aria-hidden="true"
          className={`${styles['icon']} ${isExpanded && styles['expanded']}`}
        />
      </Card>
    </div>
  );
};

export default PrincipleItem;
