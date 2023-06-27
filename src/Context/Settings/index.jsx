import React, { createContext } from 'react';

export const SettingsContext = createContext();

const defaultValues = {
  displayItems: 3,
  hideCompleted: true,
  sortDifficulty: 'difficulty',
};

export const SettingsProvider = ({ children }) => {
  return (
    <SettingsContext.Provider value={defaultValues}>
      {children}
    </SettingsContext.Provider>
  );
};
