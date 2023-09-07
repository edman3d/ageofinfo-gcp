import React from "react";
import type { Technology } from "../types";

const TechContext = React.createContext<Technology[] | null>(null);

export { TechContext };
