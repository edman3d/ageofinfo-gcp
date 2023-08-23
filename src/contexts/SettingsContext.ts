import React from "react";
import { Settings } from "../types";

const SettingsContext = React.createContext<Settings | null>(null);

export { SettingsContext };
