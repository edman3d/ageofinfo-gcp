import * as React from "react";
import { Box, Grid, Typography } from "@mui/material";
import type { Civilization } from "../../types";
import CivCompareDetails from "./CivCompareDetails";
import { AutoCompleteSelect } from "../Micro";

export default function CivCompare() {
  const [selectedCivOne, setSelectedCivOne] = React.useState<Civilization | undefined | null>(null);
  const [selectedCivTwo, setSelectedCivTwo] = React.useState<Civilization | undefined | null>(null);

  return (
    <Box sx={{ width: "100%" }}>
      <Typography variant="h5" color="black" sx={{ marginBottom: 2 }}>
        Compare Civilizations
      </Typography>
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
