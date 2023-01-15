import * as React from "react";
import { useContext } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { CardMedia, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { UnitContext } from "../../contexts/UnitContext";
import type { Unit } from "../../types";
import { LIGHT_TAN_COLOR, MEDIUM_TAN_COLOR, DARK_TAN_COLOR } from "../../constants/colors";
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
              <CardMedia
                component="img"
                height="140"
                image={require(`../../images/units/${unit.image}.png`)}
                alt="unitIcon"
                sx={{ height: iconSize, width: iconSize, marginRight: "10px" }}
              />
              <Typography sx={{ alignSelf: "center" }}>{unit.name}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{unit.description}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
    </div>
  );
}
