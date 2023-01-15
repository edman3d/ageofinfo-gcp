import React from "react";
import type { Unit } from "../types";

const UnitContext = React.createContext<Unit[] | null>(null);

export { UnitContext };
