import { useTheme } from '@jmacd229/design-system';
import { ProjectHistoryItem, WorkHistoryItem } from '../../types';
import { itemIsWorkHistory } from '../utilities';
import {
  workExperience,
  workExperienceContent,
  workExperienceDate,
  workExperienceDateAnchor,
  workExperienceIcon,
  workExperienceTitle,
  workExperienceVersion,
} from './WorkItem.styles';

const WorkItem = ({ item }: { item: WorkHistoryItem | ProjectHistoryItem }) => {
  const { currentTheme } = useTheme();

  return (
    <div className={workExperience}>
      <div className={workExperienceContent}>
        {item.iconImg ? (
          <img
            className={workExperienceIcon}
            src={
              typeof item.iconImg.src === 'string'
                ? item.iconImg.src
                : item.iconImg.src[currentTheme]
            }
            alt={item.iconImg.alt}
          />
        ) : (
          item.icon
        )}
        <div className={workExperienceTitle}>{item.title}</div>
      </div>
      {itemIsWorkHistory(item) ? (
        <div className={workExperienceDateAnchor}>
          <div className={workExperienceDate}>
            {item.startDate} - {item.endDate ?? 'Present'}
          </div>
        </div>
      ) : (
        item.version && (
          <div className={`small-text ${workExperienceVersion}`}>
            V{item.version}
          </div>
        )
      )}
    </div>
  );
};

export default WorkItem;
