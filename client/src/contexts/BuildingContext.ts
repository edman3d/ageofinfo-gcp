import React from "react";
import type { Building } from "../types";

const BuildingContext = React.createContext<Building[] | null>(null);

export { BuildingContext };
