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
import { UnitContext } from "../../contexts";
import type { Unit } from "../../types";
import { MEDIUM_TAN_COLOR, DARK_TAN_COLOR } from "../../constants";
import { getCostObject, getCreatedInFileName, getRequiresAgeFileName } from "../../util";
import { BonusChipList, ChipList, CostDisplay, StatDisplay } from "../Stats";

type UnitAccordionsProps = {
  unique_units: string | null;
  iconSize: number;
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

export function UnitAccordions(props: UnitAccordionsProps) {
  const allUnits = useContext(UnitContext);
  const unitNames: string[] = props.unique_units ? props.unique_units.split(";") : [];
  const unitObjects = getUnitObjects(unitNames, allUnits);

  return (
    <div>
      {unitObjects &&
        unitObjects.map((unit) => (
          <Accordion key={unit.name} sx={{ backgroundColor: MEDIUM_TAN_COLOR }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`${unit.name}-content`}
              id={`${unit.name}-header`}
            >
              <Grid container>
                <Grid item xl="auto">
                  <CardMedia
                    component="img"
                    height="140"
                    image={require(`../../images/units/${unit.image}.png`)}
                    alt="unitIcon"
                    sx={{
                      height: `${props.iconSize}px`,
                      width: `${props.iconSize}px`,
                      marginRight: "10px",
                      border: `2px solid ${DARK_TAN_COLOR}`,
                    }}
                    title={unit.name}
                  />
                </Grid>
                <Grid item xl={9} md={8} sm={7} xs="auto">
                  <Grid container>
                    <Grid item xs={12}>
                      <Typography variant="body1" fontWeight={500}>
                        {unit.name}
                      </Typography>
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
                <Grid item xs={12} marginBottom={1}>
                  <Typography variant="caption">Description</Typography>
                  <Typography variant="subtitle1">{unit.description}</Typography>
                </Grid>
                {unit.special ? (
                  <Grid item xs={12} marginBottom={1}>
                    <Typography variant="caption">Special Ability</Typography>
                    <Typography variant="subtitle1">{unit.special}</Typography>
                  </Grid>
                ) : null}
                <Grid item xs={6}>
                  <Typography variant="caption">Requires Age</Typography>
                  <br />
                  <Chip
                    size="medium"
                    avatar={
                      <Avatar
                        alt="requires-age"
                        src={require(`../../images/technologies/${getRequiresAgeFileName(unit.age)}`)}
                      />
                    }
                    label={unit.age}
                    sx={{ fontSize: "1rem", marginBottom: 1 }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="caption">Created In</Typography>
                  <br />
                  <Chip
                    size="medium"
                    avatar={
                      <Avatar
                        alt="requires-age"
                        src={require(`../../images/buildings/${getCreatedInFileName(unit.created_in)}`)}
                      />
                    }
                    label={unit.created_in}
                    sx={{ fontSize: "1rem", marginBottom: 1 }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="caption">Attack Bonus</Typography>
                  <BonusChipList bonuses={unit.attack_bonus} />
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="caption">Armor Bonus</Typography>
                  <BonusChipList bonuses={unit.armor_bonus} />
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="caption">Type</Typography>
                  <ChipList delimitedString={unit.type} />
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="caption">Armor Class</Typography>
                  <ChipList delimitedString={unit.armor_class} />
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
                  <Typography variant="subtitle1">{unit.movement_rate} tile/s per second</Typography>
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
