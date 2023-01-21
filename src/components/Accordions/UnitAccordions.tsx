import * as React from "react";
import { useContext } from "react";
import { Accordion, AccordionDetails, AccordionSummary, CardMedia, Grid, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { UnitContext } from "../../contexts/UnitContext";
import type { Unit } from "../../types";
import { LIGHT_TAN_COLOR, MEDIUM_TAN_COLOR, DARK_TAN_COLOR } from "../../constants/colors";

import getCostObject from "../../util/getCost";

// should take in a string and return 1 or more accordions (some civs have multiple unique units)
type UnitAccordionsProps = {
  unique_units: string | null;
};

function getUnitObjects(unitNamesToFind: string[], allUnits: Unit[] | null) {
  if (!allUnits) return;
  let unitObjects: Unit[] = [];
  unitNamesToFind.forEach((unitName) => {
    const result = allUnits.find(({ name }) => name === unitName);

    if (result) {
      unitObjects.push(result);
    }
  });
  return unitObjects;
}

const iconSize = "64px";

export default function UnitAccordions(props: UnitAccordionsProps) {
  const allUnits = useContext(UnitContext);
  const unitNames: string[] = props.unique_units ? props.unique_units.split(";") : [];
  const unitObjects = getUnitObjects(unitNames, allUnits);

  return (
    <div>
      {unitObjects &&
        unitObjects.map((unit) => (
          <Accordion sx={{ backgroundColor: MEDIUM_TAN_COLOR }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
              {/* <CardMedia
                component="img"
                height="140"
                image={require(`../../images/units/${unit.image}.png`)}
                alt="unitIcon"
                sx={{ height: iconSize, width: iconSize, marginRight: "10px" }}
              />
              <Typography sx={{ alignSelf: "center" }}>{unit.name}</Typography> */}
              <Grid container sx={{ border: "1px solid black" }}>
                <Grid item xs={1.5}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={require(`../../images/units/${unit.image}.png`)}
                    alt="unitIcon"
                    sx={{ height: iconSize, width: iconSize, marginRight: "10px" }}
                  />
                </Grid>
                <Grid item xs={10.5}>
                  <Grid container>
                    <Grid item xs={3} sx={{ border: "1px solid green" }}>
                      <Typography sx={{ alignSelf: "center" }}>{unit.name}</Typography>
                    </Grid>
                    <Grid item xs={9} sx={{ border: "1px solid green" }}></Grid>
                    <Grid item xs={3} sx={{ border: "1px solid red" }}>
                      <Typography>Wood: {getCostObject(unit.cost).Wood}</Typography>
                    </Grid>
                    <Grid item xs={3} sx={{ border: "1px solid red" }}>
                      <Typography>Food: {getCostObject(unit.cost).Food}</Typography>
                    </Grid>
                    <Grid item xs={3} sx={{ border: "1px solid red" }}>
                      <Typography>Gold: {getCostObject(unit.cost).Gold}</Typography>
                    </Grid>
                    <Grid item xs={3} sx={{ border: "1px solid red" }}>
                      <Typography>Stone: {getCostObject(unit.cost).Stone}</Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container>
                <Grid item xs={3}>
                  <Typography>Wood: </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography>Food</Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography>Gold</Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography>Stone</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography>{unit.description}</Typography>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
        ))}
    </div>
  );
}
