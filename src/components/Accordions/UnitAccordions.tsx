import * as React from "react";
import { useContext } from "react";
import { Accordion, AccordionDetails, AccordionSummary, CardMedia, Grid, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { UnitContext } from "../../contexts/UnitContext";
import type { Unit } from "../../types";
import { LIGHT_TAN_COLOR, MEDIUM_TAN_COLOR, DARK_TAN_COLOR } from "../../constants/colors";

import getCostObject from "../../util/getCost";

import StatIcon from "../StatIcon";
import StatIconWithValue from "../StatIconWithValue";

import CostDisplay from "../CostDisplay";
import DetailsList from "../DetailsList";

import StatDisplay from "../StatDisplay";

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

const iconSize = "110px";

export default function UnitAccordions(props: UnitAccordionsProps) {
  const allUnits = useContext(UnitContext);
  // console.log("props", props);
  const unitNames: string[] = props.unique_units ? props.unique_units.split(";") : [];
  // console.log("unitNames", unitNames);
  const unitObjects = getUnitObjects(unitNames, allUnits);
  // console.log("unitObjects", unitObjects);

  return (
    <div>
      {unitObjects &&
        unitObjects.map((unit) => (
          <Accordion key={unit.name} sx={{ backgroundColor: MEDIUM_TAN_COLOR }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
              <Grid container>
                <Grid item xs={2.5}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={require(`../../images/units/${unit.image}.png`)}
                    alt="unitIcon"
                    sx={{ height: iconSize, width: iconSize, marginRight: "10px" }}
                  />
                </Grid>
                <Grid item xs={9.5}>
                  <Grid container>
                    <Grid item xs={12}>
                      <Typography variant="body1">{unit.name}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <CostDisplay costObject={getCostObject(unit.cost)} />
                    </Grid>
                    <Grid item xs={12}>
                      <StatDisplay unit={unit} />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </AccordionSummary>
            {/* Dropdown contents */}
            <AccordionDetails>
              <Grid container>
                <Grid item xs={12}>
                  <Typography variant="caption">Description</Typography>
                  <Typography variant="subtitle1">{unit.description}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="caption">Requires Age</Typography>
                  <Typography variant="subtitle1">{unit.age}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="caption">Created In</Typography>
                  <Typography variant="subtitle1">{unit.created_in}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="caption">Attack Bonus</Typography>
                  <DetailsList delimitedString={unit.attack_bonus} />
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="caption">Armor Bonus</Typography>
                  <DetailsList delimitedString={unit.armor_bonus} />
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="caption">Type</Typography>
                  <Typography variant="subtitle1">{unit.type}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="caption">Armor Class</Typography>
                  <DetailsList delimitedString={unit.armor_class} />
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="caption">Training Time</Typography>
                  <Typography variant="subtitle1">{unit.build_time} seconds</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="caption">Line of Sight</Typography>
                  <Typography variant="subtitle1">{unit.line_of_sight}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="caption">Movement Speed</Typography>
                  <Typography variant="subtitle1">{unit.movement_rate} tiles per second</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="caption">Accuracy</Typography>
                  <Typography variant="subtitle1">{unit.accuracy}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="caption">Reload Time</Typography>
                  <Typography variant="subtitle1">{unit.reload_time}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="caption">Attack Delay</Typography>
                  <Typography variant="subtitle1">{unit.attack_delay}</Typography>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
        ))}
    </div>
  );
}
