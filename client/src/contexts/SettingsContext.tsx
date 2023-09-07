import React from "react";
import { createContext, useState } from "react";

type SettingsContextProps = {
  showEliteUnits: boolean;
  toggleShowEliteUnits: () => void;
};

type SettingsProviderProps = {
  children: React.ReactNode;
};

export const DEFAULT_CONTEXT: SettingsContextProps = {
  showEliteUnits: false,
  toggleShowEliteUnits: () => false,
};

export const SettingsContext = createContext<SettingsContextProps>(DEFAULT_CONTEXT);

export const SettingsProvider = ({ children }: SettingsProviderProps) => {
  const [showEliteUnits, setShowEliteUnits] = useState<boolean>(false);

  const toggleShowEliteUnits = () => {
    setShowEliteUnits(!showEliteUnits);
  };

  return (
    <SettingsContext.Provider
      value={{
        showEliteUnits,
        toggleShowEliteUnits,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};
