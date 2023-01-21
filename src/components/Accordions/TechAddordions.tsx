import * as React from "react";
import { useContext } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { CardMedia, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { TechContext } from "../../contexts/TechContext";
import type { Technology } from "../../types";
import { LIGHT_TAN_COLOR, MEDIUM_TAN_COLOR, DARK_TAN_COLOR } from "../../constants/colors";
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
          <Accordion sx={{ backgroundColor: MEDIUM_TAN_COLOR }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
              <CardMedia
                component="img"
                height="140"
                image={require(`../../images/technologies/${tech.image}.png`)}
                alt="unitIcon"
                sx={{ height: iconSize, width: iconSize, marginRight: "10px" }}
              />
              <Typography sx={{ alignSelf: "center" }}>{tech.name}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{tech.description}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
    </div>
  );
}
