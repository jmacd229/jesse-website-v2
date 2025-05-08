import { Heading } from '@jmacd229/design-system';

import { WORK_PRINCIPLES } from '../constants';
import PrincipleItem from './PrincipleItem/PrincipleItem';
import styles from './principles.module.css';

const Principles = () => {
  return (
    <div className={styles['principles-container']}>
      <Heading className={styles['main-title']} level={3}>
        Principles
      </Heading>
      <div role="tree" className={styles['principles']}>
        {WORK_PRINCIPLES.map((item, i) => {
          return <PrincipleItem role="treeitem" item={item} key={i} />;
        })}
      </div>
    </div>
  );
};

export default Principles;
