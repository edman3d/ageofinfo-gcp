import React from "react";
import type { Civilization } from "../types";

const CivContext = React.createContext<Civilization[] | null>(null);

export { CivContext };
