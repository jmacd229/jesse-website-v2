import { Heading } from '@jesse-website-v2/design-system';

import Principles from './Principles/Principles';
import styles from './work.module.css';

const Work = () => {
  return (
    <div className={styles['work-container']}>
      <Heading className={styles['main-title']} centered level="2">
        My Work
      </Heading>
      <Principles />
    </div>
  );
};

export default Work;
