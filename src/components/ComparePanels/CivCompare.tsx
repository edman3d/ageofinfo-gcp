import * as React from "react";
import { Box, Card, Grid, Typography } from "@mui/material";
import type { Civilization } from "../../types";
import CivCompareDetails from "./CivCompareDetails";
import { AutoCompleteSelect } from "../Micro";
import { LIGHT_TAN_COLOR } from "../../constants";

export default function CivCompare() {
  const [selectedCivOne, setSelectedCivOne] = React.useState<Civilization | undefined | null>(null);
  const [selectedCivTwo, setSelectedCivTwo] = React.useState<Civilization | undefined | null>(null);

  return (
    <Box sx={{ width: "100%" }}>
      <Card
        sx={{
          backgroundColor: LIGHT_TAN_COLOR,
          marginBottom: 2,
        }}
      >
        <Typography variant="h5" color="black" sx={{ padding: 1, textAlign: "center" }}>
          Compare Civilizations
        </Typography>
      </Card>
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
