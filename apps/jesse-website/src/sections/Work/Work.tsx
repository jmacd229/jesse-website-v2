import { Heading } from '@jmacd229/design-system';

import Experience from './Experience/Experience';
import Principles from './Principles/Principles';
import styles from './work.module.css';

const Work = () => {
  return (
    <div id="work" className={styles['work-container']}>
      <Heading className={styles['main-title']} centered level={2}>
        My Work
      </Heading>
      <Principles />
      <Experience />
    </div>
  );
};

export default Work;
