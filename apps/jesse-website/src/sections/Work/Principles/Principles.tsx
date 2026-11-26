import { Heading } from '@jmacd229/design-system';

import { WORK_PRINCIPLES } from '../constants';
import PrincipleItem from './PrincipleItem/PrincipleItem';
import {
  mainTitle,
  principles,
  principlesContainer,
} from './Principles.styles';

const Principles = () => {
  return (
    <div className={principlesContainer}>
      <Heading className={mainTitle} level={3}>
        Principles
      </Heading>
      <div role="tree" className={principles}>
        {WORK_PRINCIPLES.map((item, i) => {
          return <PrincipleItem role="treeitem" item={item} key={i} />;
        })}
      </div>
    </div>
  );
};

export default Principles;
