import { HTMLProps, PropsWithChildren } from 'react';
import { chipList } from './Chips.styles';

type ChipListProps = PropsWithChildren<HTMLProps<HTMLUListElement>>;

const ChipList = ({ children, className }: ChipListProps) => {
  return <ul className={`${chipList} ${className}`}>{children}</ul>;
};

export default ChipList;
