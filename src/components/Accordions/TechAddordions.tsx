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
import { TechContext } from "../../contexts";
import type { Technology } from "../../types";
import { DARK_TAN_COLOR, MEDIUM_TAN_COLOR } from "../../constants";
import { getCostObject, getCreatedInFileName, getRequiresAgeFileName } from "../../util";
import { ChipList, CostDisplay } from "../Stats";

type TechAccordionsProps = {
  unique_techs: string | null;
  iconSize: number;
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

function TechAccordions(props: TechAccordionsProps) {
  // console.log(`TechAccordions: : ${props.unique_techs}`);
  const allTechs = useContext(TechContext);
  const techNames: string[] = props.unique_techs ? props.unique_techs.split(";") : [];
  const techObjects = getTechObjects(techNames, allTechs);

  return (
    <div>
      {techObjects &&
        techObjects.map((tech) => (
          <Accordion key={tech.name} sx={{ backgroundColor: MEDIUM_TAN_COLOR }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`${tech.name}-content`}
              id={`${tech.name}-header`}
            >
              <Grid container>
                <Grid item xl="auto">
                  <CardMedia
                    component="img"
                    height="140"
                    image={require(`../../images/technologies/${tech.image}.png`)}
                    alt="unitIcon"
                    sx={{
                      height: `${props.iconSize}px`,
                      width: `${props.iconSize}px`,
                      marginRight: "10px",
                      border: `2px solid ${DARK_TAN_COLOR}`,
                    }}
                    title={tech.name}
                  />
                </Grid>
                <Grid item xl={9} md={8} sm={7} xs="auto">
                  <Grid container>
                    <Grid item xs={12}>
                      <Typography variant="body1" fontWeight={600}>
                        {tech.name}
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <CostDisplay costObject={getCostObject(tech.cost)} />
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="caption">{tech.description}</Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </AccordionSummary>
            {/* Dropdown contents */}
            <AccordionDetails>
              <Grid container>
                <Grid item xs={12} marginBottom={0.5}>
                  <Typography variant="caption">Description</Typography>
                  <Typography variant="subtitle1">{tech.description}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="caption">Requires Age</Typography>
                  <br />
                  <Chip
                    size="medium"
                    avatar={
                      <Avatar
                        alt="requires-age"
                        src={require(`../../images/technologies/${getRequiresAgeFileName(tech.age)}`)}
                      />
                    }
                    label={tech.age}
                    sx={{ fontSize: "1rem", marginBottom: 1 }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="caption">Develops In</Typography>
                  <br />
                  <Chip
                    size="medium"
                    avatar={
                      <Avatar
                        alt="develops-in"
                        src={require(`../../images/buildings/${getCreatedInFileName(tech.develops_in)}`)}
                      />
                    }
                    label={tech.develops_in}
                    sx={{ fontSize: "1rem", marginBottom: 1 }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="caption">Applies To</Typography>
                  <ChipList delimitedString={tech.applies_to} />
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="caption">Research Time</Typography>
                  <Typography variant="subtitle1">{tech.build_time} seconds</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="caption">Type</Typography>
                  <ChipList delimitedString={tech.type} />
                </Grid>
                <Grid item xs={6}>
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

export default React.memo(TechAccordions);
