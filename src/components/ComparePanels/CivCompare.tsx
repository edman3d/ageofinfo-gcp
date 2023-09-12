import * as React from "react";
import { useContext, useMemo, useState } from "react";
import { Box, Grid } from "@mui/material";
import type { Civilization } from "../../types";
import CivCompareDetails from "./CivCompareDetails";
import { AutoCompleteSelect } from "../Micro";
import { JSONDataContext } from "../../contexts";

export function CivCompare() {
  // console.log("CivCompare");
  const { civs } = useContext(JSONDataContext);
  const [selectedCivOne, setSelectedCivOne] = useState<Civilization | undefined | null>(null);
  const [selectedCivTwo, setSelectedCivTwo] = useState<Civilization | undefined | null>(null);

  const selectCivOne = (civName: string) => {
    const chosenCiv = civs?.find((c) => civName === c.name);
    setSelectedCivOne(chosenCiv);
  };

  const selectCivTwo = (civName: string) => {
    const chosenCiv = civs?.find((c) => civName === c.name);
    setSelectedCivTwo(chosenCiv);
  };

  // TODO: this should prevent AutoCompleteSelect from rendering both Selects
  // when only one is changed but it does not
  // const selectCivOne = useCallback(
  //   (civName: string) => {
  //     console.log("1: " + civName);
  //     const chosenCiv = civs?.find((c) => civName === c.name);
  //     setSelectedCivOne(chosenCiv);
  //   },
  //   [civs]
  // );
  // const selectCivTwo = useCallback(
  //   (civName: string) => {
  //     console.log("2: " + civName);
  //     const chosenCiv = civs?.find((c) => civName === c.name);
  //     setSelectedCivTwo(chosenCiv);
  //   },
  //   [civs]
  // );

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
          <AutoCompleteSelect options={dropdownOptions} selectCiv={selectCivOne} />
          <CivCompareDetails civ={selectedCivOne} />
        </Grid>
        <Grid item xs={6}>
          <AutoCompleteSelect options={dropdownOptions} selectCiv={selectCivTwo} />
          <CivCompareDetails civ={selectedCivTwo} />
        </Grid>
      </Grid>
    </Box>
  );
}
export default React.memo(CivCompare);
