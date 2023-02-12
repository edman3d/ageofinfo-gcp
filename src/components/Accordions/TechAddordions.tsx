import * as React from "react";
import { useContext } from "react";
import { Accordion, AccordionDetails, AccordionSummary, CardMedia, Grid, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { TechContext } from "../../contexts/TechContext";
import type { Technology } from "../../types";
import { LIGHT_TAN_COLOR, MEDIUM_TAN_COLOR, DARK_TAN_COLOR } from "../../constants/colors";

import CostDisplay from "../CostDisplay";
import getCostObject from "../../util/getCost";
import DetailsList from "../DetailsList";
// should take in a string and return 1 or more accordions (some civs have multiple unique units)

type TechAccordionsProps = {
  unique_techs: string | null;
};

function getTechObjects(techNamesToFind: string[], allTechs: Technology[] | null) {
  if (!allTechs) return;
  let techObjects: Technology[] = [];
  techNamesToFind.forEach((techName) => {
    const result = allTechs.find(({ name }) => name === techName);
    if (result) {
      techObjects.push(result);
    }
  });
  return techObjects;
}

const iconSize = "64px";

export default function TechAccordions(props: TechAccordionsProps) {
  const allTechs = useContext(TechContext);
  const techNames: string[] = props.unique_techs ? props.unique_techs.split(";") : [];
  const techObjects = getTechObjects(techNames, allTechs);

  return (
    <div>
      {techObjects &&
        techObjects.map((tech) => (
          <Accordion key={tech.name} sx={{ backgroundColor: MEDIUM_TAN_COLOR }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
              <Grid container>
                <Grid item xs="auto">
                  <CardMedia
                    component="img"
                    height="140"
                    image={require(`../../images/technologies/${tech.image}.png`)}
                    alt="unitIcon"
                    sx={{ height: iconSize, width: iconSize, marginRight: "10px" }}
                  />
                </Grid>
                <Grid item xs="auto">
                  <Grid container>
                    <Grid item xs={12}>
                      <Typography variant="body1" fontWeight={500}>{tech.name}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <CostDisplay costObject={getCostObject(tech.cost)} />
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
                  <Typography variant="subtitle1">{tech.description}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="caption">Applies To</Typography>
                  <DetailsList delimitedString={tech.applies_to} />
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="caption">Research Time</Typography>
                  <Typography variant="subtitle1">{tech.build_time} seconds</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="caption">Civilization</Typography>
                  <Typography variant="subtitle1">{tech.civ ? tech.civ : "All"}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="caption">Type</Typography>
                  <Typography variant="subtitle1">{tech.type}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="caption">Develops In</Typography>
                  <Typography variant="subtitle1">{tech.develops_in}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="caption">Age Required</Typography>
                  <Typography variant="subtitle1">{tech.age}</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="caption">Expansion</Typography>
                  <Typography variant="subtitle1">{tech.expansion}</Typography>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
        ))}
    </div>
  );
}
