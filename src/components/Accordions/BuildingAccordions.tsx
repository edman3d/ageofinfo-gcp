import * as React from "react";
import { useContext } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  CardMedia,
  Chip,
  Grid,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { BuildingContext } from "../../contexts";
import type { Building } from "../../types";
import { DARK_TAN_COLOR, MEDIUM_TAN_COLOR } from "../../constants";
import DetailsList from "../ComparePanels/DetailsList";
import { getRequiresAgeFileName } from "../../util";
import CostDisplay from "../Stats/CostDisplay";

type BuildingAccordionsProps = {
  unique_buildings: string | null;
  iconSize: number;
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

function BuildingAccordions(props: BuildingAccordionsProps) {
  // console.log(`BuildingAccordions: : ${props.unique_buildings}`);
  const allBuildings = useContext(BuildingContext);
  const buildingNames: string[] = props.unique_buildings ? props.unique_buildings.split(";") : [];
  const buildingObjects = getBuildingObjects(buildingNames, allBuildings);

  return (
    <div>
      {buildingObjects && buildingObjects.length > 0 ? (
        buildingObjects.map((building) => (
          <Accordion key={building.name} sx={{ backgroundColor: MEDIUM_TAN_COLOR }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`${building.name}-content`}
              id={`${building.name}-header`}
            >
              <Grid container>
                <Grid item xl="auto">
                  <CardMedia
                    component="img"
                    height="140"
                    image={require(`../../images/buildings/${building.image}.png`)}
                    alt="buildingIcon"
                    sx={{
                      height: `${props.iconSize}px`,
                      width: `${props.iconSize}px`,
                      marginRight: "10px",
                      border: `2px solid ${DARK_TAN_COLOR}`,
                    }}
                    title={building.name}
                  />
                </Grid>
                <Grid item xl={9} md={8} sm={7} xs="auto">
                  <Grid container>
                    <Grid item xs={12}>
                      <Typography variant="body1" fontWeight={600}>
                        {building.name}
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <CostDisplay costString={building.cost} />
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
                  <Typography variant="subtitle1">
                    {building.melee_armor} / {building.ranged_armor}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="caption">Range</Typography>
                  <Typography variant="subtitle1">
                    {building.max_range ? building.max_range : "N/A"}{" "}
                    {building.min_range !== 0 ? `(${building.min_range} minimum)` : null}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="caption">Requires Age</Typography>
                  <br />
                  <Chip
                    size="medium"
                    avatar={
                      <Avatar
                        alt="requires-age"
                        src={require(`../../images/technologies/${getRequiresAgeFileName(building.age)}`)}
                      />
                    }
                    label={building.age}
                    sx={{ fontSize: "1rem", marginBottom: 1 }}
                  />
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

export default React.memo(BuildingAccordions);
