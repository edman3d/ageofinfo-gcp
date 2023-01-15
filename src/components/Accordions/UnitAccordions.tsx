import * as React from "react";
import { useContext, useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { UnitContext } from "../../contexts/UnitContext";
import type { Unit } from "../../types";
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

export default function UnitAccordions(props: UnitAccordionsProps) {
  const allUnits = useContext(UnitContext);
  const unitNames: string[] = props.unique_units ? props.unique_units.split(";") : [];
  const unitObjects = getUnitObjects(unitNames, allUnits);
  console.log(unitObjects);

  return (
    <div>
      {unitObjects &&
        unitObjects.map((unit) => (
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
              <Typography>{unit.name}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{unit.description}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
    </div>
  );
}
