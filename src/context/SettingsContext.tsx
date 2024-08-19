import React, { createContext, useState, useContext, ReactNode } from 'react';

interface SettingsContextProps {
  focusLength: number;
  shortBreakLength: number;
  longBreakLength: number;
  darkMode: boolean;
  toggleDarkMode: () => void;
  setFocusLength: (length: number) => void;
  setShortBreakLength: (length: number) => void;
  setLongBreakLength: (length: number) => void;
}

const SettingsContext = createContext<SettingsContextProps | undefined>(undefined);

export const SettingsProvider = ({ children }: { children: ReactNode }) => {
  const [focusLength, setFocusLength] = useState(25);
  const [shortBreakLength, setShortBreakLength] = useState(5);
  const [longBreakLength, setLongBreakLength] = useState(15);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <SettingsContext.Provider
      value={{
        focusLength,
        shortBreakLength,
        longBreakLength,
        darkMode,
        toggleDarkMode,
        setFocusLength,
        setShortBreakLength,
        setLongBreakLength,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }
  return context;
};
