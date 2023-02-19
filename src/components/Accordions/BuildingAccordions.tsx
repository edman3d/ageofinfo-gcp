import * as React from "react";
import { useContext } from "react";
import { Accordion, AccordionDetails, AccordionSummary, CardMedia, Grid, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { BuildingContext } from "../../contexts/BuildingContext";
import type { Building } from "../../types";
import { LIGHT_TAN_COLOR, MEDIUM_TAN_COLOR, DARK_TAN_COLOR } from "../../constants/colors";

import CostDisplay from "../CostDisplay";
import getCostObject from "../../util/getCost";
import DetailsList from "../DetailsList";
// should take in a string and return 1 or more accordions (some civs have multiple unique units)

type BuildingAccordionsProps = {
  unique_buildings: string | null;
};

function getBuildingObjects(buildingNamesToFind: string[], allBuildings: Building[] | null) {
  if (!allBuildings) return;
  let buildingObjects: Building[] = [];
  buildingNamesToFind.forEach((buildingName) => {
    const result = allBuildings.find(({ name }) => name === buildingName);
    if (result) {
      buildingObjects.push(result);
    }
  });
  return buildingObjects;
}

const iconSize = "110px";

export default function BuildingAccordions(props: BuildingAccordionsProps) {
  const allBuildings = useContext(BuildingContext);
  const buildingNames: string[] = props.unique_buildings ? props.unique_buildings.split(";") : [];
  console.log(buildingNames);
  const buildingObjects = getBuildingObjects(buildingNames, allBuildings);

  return (
    <div>
      {buildingObjects && buildingObjects.length > 0 ? (
        buildingObjects.map((building) => (
          <Accordion key={building.name} sx={{ backgroundColor: MEDIUM_TAN_COLOR }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
              <Grid container>
                <Grid item xs="auto">
                  <CardMedia
                    component="img"
                    height="140"
                    image={require(`../../images/buildings/${building.image}.png`)}
                    alt="buildingIcon"
                    sx={{ height: iconSize, width: iconSize, marginRight: "10px" }}
                  />
                </Grid>
                <Grid item xs="auto">
                  <Grid container maxWidth={330}>
                    <Grid item xs={12}>
                      <Typography variant="body1" fontWeight={500}>
                        {building.name}
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <CostDisplay costObject={getCostObject(building.cost)} />
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="caption">{building.special}</Typography>
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
                  <Typography variant="subtitle1">{building.special}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="caption">Hit Points</Typography>
                  <Typography variant="subtitle1">{building.hit_points}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="caption">Attack</Typography>
                  <Typography variant="subtitle1">{building.attack ? building.attack : "N/A"}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="caption">Armor</Typography>
                  <Typography variant="subtitle1">{building.armor}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="caption">Range</Typography>
                  <Typography variant="subtitle1">{building.range ? building.range : "N/A"}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="caption">Requires Age</Typography>
                  <Typography variant="subtitle1">{building.age}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="caption">Build Time</Typography>
                  <Typography variant="subtitle1">{building.build_time} seconds</Typography>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
        ))
      ) : (
        <DetailsList delimitedString={"None"} />
      )}
    </div>
  );
}
