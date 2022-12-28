import * as React from "react";
import { Box, Grid, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import Title from "./Title";
import type { Civilization } from "../types";

interface CivCompareDetailsProps {
  civ?: Civilization;
}

export default function CivCompareDetails(props: CivCompareDetailsProps) {
  return <Paper sx={{ height: 420, width: "100%" }}></Paper>;
}
