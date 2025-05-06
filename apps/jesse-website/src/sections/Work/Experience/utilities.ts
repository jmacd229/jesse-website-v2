import { ProjectHistoryItem, WorkHistoryItem } from '../types';

export const itemIsWorkHistory = (
  item: WorkHistoryItem | ProjectHistoryItem
): item is WorkHistoryItem => {
  return 'startDate' in item;
};
