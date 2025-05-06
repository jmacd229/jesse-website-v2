import { createContext, PropsWithChildren, useContext, useState } from 'react';
import { ProjectHistoryItem, WorkHistoryItem } from '../types';

type HistoryItem = WorkHistoryItem | ProjectHistoryItem;

const ExperienceContext = createContext<{
  selectedItem?: HistoryItem;
  setSelectedItem: (item?: HistoryItem) => void;
}>({
  setSelectedItem: () => void 0,
});

export const ExperienceContextProvider = ({ children }: PropsWithChildren) => {
  const [selectedItem, setSelectedItem] = useState<HistoryItem>();
  return (
    <ExperienceContext.Provider
      value={{
        selectedItem,
        setSelectedItem,
      }}
    >
      {children}
    </ExperienceContext.Provider>
  );
};

export const useExperienceContext = () => useContext(ExperienceContext);
