import * as React from "react";
import { Box, Grid, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import Title from "./Title";
import type { Civilization } from "../types";
import CivCompareDetails from "./CivCompareDetails";

let civs: Civilization[] = require("./../data/civs.json");
// for testing
const civ1 = civs[0];
const civ2 = civs[1];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  marginBottom: 6,
}));

export default function CivCompare() {
  return (
    <Box sx={{ height: 500, width: "100%" }}>
      <Title>Compare Civilizations</Title>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Item>Choose Civ Select</Item>
          <CivCompareDetails />
        </Grid>
        <Grid item xs={6}>
          <Item>Choose Civ Select</Item>
          <CivCompareDetails />
        </Grid>
      </Grid>
    </Box>
  );
}
