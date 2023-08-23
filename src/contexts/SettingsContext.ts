import React from "react";
import type { Settings } from "../types";

export const DEFAULT_SETTINGS: Settings = {
  showEliteUnits: false,
};

const SettingsContext = React.createContext<Settings>(DEFAULT_SETTINGS);

export { SettingsContext };
