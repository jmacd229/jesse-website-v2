import { Heading } from '@jmacd229/design-system';

import Experience from './Experience/Experience';
import Principles from './Principles/Principles';
import { mainTitle, workContainer } from './Work.styles';

const Work = () => {
  return (
    <div id="work" className={workContainer}>
      <Heading className={mainTitle} centered level={2}>
        My Work
      </Heading>
      <Principles />
      <Experience />
    </div>
  );
};

export default Work;
