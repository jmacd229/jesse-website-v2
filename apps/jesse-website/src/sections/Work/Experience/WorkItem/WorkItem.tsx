import { ProjectHistoryItem, WorkHistoryItem } from '../../types';
import { itemIsWorkHistory } from '../utilities';
import styles from './workItem.module.css';

const WorkItem = ({ item }: { item: WorkHistoryItem | ProjectHistoryItem }) => {
  return (
    <div className={styles['work-experience']}>
      <div className={styles['work-experience-content']}>
        {item.iconImg ? (
          <img
            className={styles['work-experience-icon']}
            src={item.iconImg.src}
            alt={item.iconImg.alt}
          />
        ) : (
          item.icon
        )}
        <div className={styles['work-experience-title']}>{item.title}</div>
      </div>
      {itemIsWorkHistory(item) ? (
        <div className={styles['work-experience-date-anchor']}>
          <div className={styles['work-experience-date']}>
            {item.startDate} - {item.endDate ?? 'Present'}
          </div>
        </div>
      ) : (
        item.version && (
          <div className={`small-text ${styles['work-experience-version']}`}>
            V{item.version}
          </div>
        )
      )}
    </div>
  );
};

export default WorkItem;
