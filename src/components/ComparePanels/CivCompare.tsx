import * as React from "react";
import { useContext, useMemo, useState } from "react";
import { Box, Grid } from "@mui/material";
import type { Civilization } from "../../types";
import CivCompareDetails from "./CivCompareDetails";
import { AutoCompleteSelect } from "../Micro";
import { CivContext } from "../../contexts/CivContext";

export default function CivCompare() {
  console.log("CivCompare");
  const civs = useContext(CivContext);
  const [selectedCivOne, setSelectedCivOne] = useState<Civilization | undefined | null>(null);
  const [selectedCivTwo, setSelectedCivTwo] = useState<Civilization | undefined | null>(null);

  const dropdownOptions = useMemo(() => {
    let dropdownOptions: string[] = [];
    civs?.forEach((civ) => {
      dropdownOptions.push(civ.name);
    });
    return dropdownOptions;
  }, [civs]);

  return (
    <Box sx={{ width: "100%" }}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <AutoCompleteSelect options={dropdownOptions} setSelectedCiv={setSelectedCivOne} />
          <CivCompareDetails civ={selectedCivOne} />
        </Grid>
        <Grid item xs={6}>
          <AutoCompleteSelect options={dropdownOptions} setSelectedCiv={setSelectedCivTwo} />
          <CivCompareDetails civ={selectedCivTwo} />
        </Grid>
      </Grid>
    </Box>
  );
}
