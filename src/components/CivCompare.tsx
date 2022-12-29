import * as React from "react";
import { Box, Grid, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import Title from "./Title";
import type { Civilization } from "../types";
import CivCompareDetails from "./CivCompareDetails";

import AutoCompleteSelect from "./AutoCompleteSelect";

let civs: Civilization[] = require("./../data/civs.json");

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
//   marginBottom: 10,
// }));

export default function CivCompare() {
  // const [value, setValue] = React.useState<string | null>(options[0]);
  // const [inputValue, setInputValue] = React.useState("");
  const [selectedCivOne, setSelectedCivOne] = React.useState<Civilization | null>(civs[0]);
  const [selectedCivTwo, setSelectedCivTwo] = React.useState<Civilization | null>(civs[1]);

  return (
    <Box sx={{ height: 700, width: "100%" }}>
      <Title>Compare Civilizations</Title>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <AutoCompleteSelect />
          <CivCompareDetails civ={selectedCivOne} />
        </Grid>
        <Grid item xs={6}>
          <AutoCompleteSelect />
          <CivCompareDetails civ={selectedCivTwo} />
        </Grid>
      </Grid>
    </Box>
  );
}
