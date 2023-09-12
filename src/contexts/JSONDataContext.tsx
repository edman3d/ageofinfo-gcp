import React from "react";
import { createContext } from "react";
import { type Building, type Civilization, type Technology, type Unit } from "../types";

type JSONDataContextProps = {
  units: Unit[];
  techs: Technology[];
  civs: Civilization[];
  buildings: Building[];
};

type JSONDataProviderProps = {
  children: React.ReactNode;
};

let units: Unit[] = require("./../data/units.json");
let techs: Technology[] = require("./../data/techs.json");
let civs: Civilization[] = require("./../data/civs.json");
let buildings: Building[] = require("./../data/buildings.json");

const DEFAULT_CONTEXT: JSONDataContextProps = {
  units: units,
  techs: techs,
  civs: civs,
  buildings: buildings,
};

export const JSONDataContext = createContext<JSONDataContextProps>(DEFAULT_CONTEXT);

export const JSONDataProvider = ({ children }: JSONDataProviderProps) => {
  return <JSONDataContext.Provider value={{ units, techs, civs, buildings }}>{children}</JSONDataContext.Provider>;
};
