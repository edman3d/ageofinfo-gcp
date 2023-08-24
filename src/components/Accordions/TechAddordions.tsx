import * as React from "react";
import { useContext, useMemo } from "react";
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
import { getCreatedInFileName, getRequiresAgeFileName } from "../../util";
import ChipList from "../Stats/ChipList";
import CostDisplay from "../Stats/CostDisplay";

type TechAccordionsProps = {
  unique_techs: string | null;
  iconSize: number;
};

function TechAccordions(props: TechAccordionsProps) {
  const { iconSize, unique_techs } = props;
  const allTechs = useContext(TechContext);

  const techNames = useMemo(() => {
    if (unique_techs) {
      return unique_techs.split(";");
    }
    return [];
  }, [unique_techs]);

  const techObjects = useMemo(() => {
    let tObjects: Technology[] = [];
    techNames.forEach((techName) => {
      const result = allTechs?.find(({ name }) => name === techName);
      if (result) {
        tObjects.push(result);
      }
    });
    return tObjects;
  }, [allTechs, techNames]);

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
                      height: `${iconSize}px`,
                      width: `${iconSize}px`,
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
                      <CostDisplay costString={tech.cost} />
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
