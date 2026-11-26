import { HTMLProps } from 'react';
import { chip } from './Chips.styles';

const Chip = ({ children, ...rest }: HTMLProps<HTMLLIElement>) => {
  return (
    <li {...rest} className={chip}>
      {children}
    </li>
  );
};

export default Chip;
