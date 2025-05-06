import ChipComponent from './Chip';
import ChipList from './ChipList';

type ChipComponentType = typeof ChipComponent & {
  List: typeof ChipList;
};

export const Chip = ChipComponent as ChipComponentType;
Chip.List = ChipList;
