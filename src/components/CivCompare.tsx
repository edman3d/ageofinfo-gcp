import * as React from "react";
import { Box, Grid } from "@mui/material";
import Title from "./Title";
import type { Civilization } from "../types";
import CivCompareDetails from "./CivCompareDetails";
import AutoCompleteSelect from "./AutoCompleteSelect";

export default function CivCompare() {
  const [selectedCivOne, setSelectedCivOne] = React.useState<Civilization | undefined | null>(null);
  const [selectedCivTwo, setSelectedCivTwo] = React.useState<Civilization | undefined | null>(null);

  return (
    <Box sx={{ height: "100vh", width: "100%" }}>
      <Title>Compare Civilizations</Title>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <AutoCompleteSelect setSelectedCiv={setSelectedCivOne} />
          <CivCompareDetails civ={selectedCivOne} />
        </Grid>
        <Grid item xs={6}>
          <AutoCompleteSelect setSelectedCiv={setSelectedCivTwo} />
          <CivCompareDetails civ={selectedCivTwo} />
        </Grid>
      </Grid>
    </Box>
  );
}
