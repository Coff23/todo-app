import React, { createContext, useState, useEffect } from 'react';

export const SettingsContext = createContext();

const SettingsProvider = ({ children }) => {
  const [pageItems, setPageItems] = useState(3);
  const [showCompleted, setShowCompleted] = useState(false);
  const [sort, setSort] = useState("difficulty");

  // new code
  useEffect(() => {
    const storedSettings = localStorage.getItem("settings");
    if (storedSettings) {
      const parsedSettings = JSON.parse(storedSettings);
      setPageItems(parsedSettings.pageItems);
      setShowCompleted(parsedSettings.showCompleted);
      setSort(parsedSettings.sort);
    }
  }, []);

  const saveSettingsToLocalStorage = () => {
    const settings = {
      pageItems,
      showCompleted,
      sort
    };
    localStorage.setItem("settings", JSON.stringify(settings));
  };

  const updatePageItems = (count) => {
    setPageItems(count);
  };

  const updateShowCompleted = (value) => {
    setShowCompleted(value);
  };

  const updateSort = (field) => {
    setSort(field);
  };

  const values = {
    pageItems,
    showCompleted,
    sort,
    setPageItems: updatePageItems,
    setShowCompleted: updateShowCompleted,
    setSort: updateSort,
    saveLocalStorage: saveSettingsToLocalStorage,
  };

  return (
    <SettingsContext.Provider value={values}>
      {children}
    </SettingsContext.Provider>
  );
};


export default SettingsProvider;
