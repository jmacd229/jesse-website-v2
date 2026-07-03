import { PropsWithChildren } from 'react';
import styles from './tree.module.css';

const Tree = ({ children }: PropsWithChildren) => {
  return <ul className={styles['tree-root']}>{children}</ul>;
};

export default Tree;
