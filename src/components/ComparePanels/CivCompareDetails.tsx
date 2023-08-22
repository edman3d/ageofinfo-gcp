import * as React from "react";
import { Card, CardContent, CardMedia, Divider, Grid, Typography } from "@mui/material";
import type { Civilization } from "../../types";
import DetailsList from "./DetailsList";
import { LIGHT_TAN_COLOR } from "../../constants";
import BuildingAccordions from "../Accordions/BuildingAccordions";
import TechAccordions from "../Accordions/TechAddordions";
import UnitAccordions from "../Accordions/UnitAccordions";

type CivCompareDetailsProps = {
  civ?: Civilization | null;
};

const CIV_ICON_SIZE: number = 64;
const ACCORDION_ICON_SIZE: number = 110;
const MARGIN_BETWEEN_DIVIDERS: number = 10;
const DIVIDER_FONT_WEIGHT: number = 800;

export function CivCompareDetails(props: CivCompareDetailsProps) {
  console.log(`CivCompareDetails: : ${props.civ?.name}`);
  return (
    <Card
      sx={{
        height: 1175,
        backgroundColor: LIGHT_TAN_COLOR,
        overflowY: "scroll",
        "&::-webkit-scrollbar": {
          width: 20,
        },
        "&::-webkit-scrollbar-track": {
          backgroundColor: LIGHT_TAN_COLOR,
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "#c9a483",
          border: "1px solid #966c46",
        },
      }}
    >
      <div style={{ display: "flex", alignItems: "center", paddingLeft: 4, paddingTop: 4 }}>
        <CardMedia
          component="img"
          height="140"
          image={
            props.civ
              ? require(`../../images/civilizations/${props.civ?.image}.png`)
              : require("../../images/staticons/convert.png")
          }
          alt="civ-banner"
          sx={{ height: `${CIV_ICON_SIZE}px`, width: `${CIV_ICON_SIZE}px` }}
          title={props.civ?.name}
        />
        <div style={{ display: "flex", flexDirection: "column", marginLeft: 2 }}>
          <Typography variant="h5" fontWeight={600}>
            {props.civ ? props.civ.name : "Select a Civilization"}
          </Typography>
          <Typography variant="subtitle2">{props.civ ? `${props.civ?.army_type} Civilization` : null} </Typography>
        </div>
      </div>
      <CardContent sx={{ height: 750, paddingTop: "0", marginTop: 1 }}>
        {props.civ ? (
          <>
            <Divider textAlign="left">
              <Typography fontWeight={DIVIDER_FONT_WEIGHT} variant="body2" color="text.secondary">
                Civ Bonus
              </Typography>
            </Divider>
            <Typography
              variant="subtitle2"
              color="text.secondary"
              sx={{ marginBottom: `${MARGIN_BETWEEN_DIVIDERS}px` }}
            >
              <DetailsList delimitedString={props.civ.civilization_bonus} />
            </Typography>

            <Divider textAlign="left">
              <Typography fontWeight={DIVIDER_FONT_WEIGHT} variant="body2" color="text.secondary">
                Team Bonus
              </Typography>
            </Divider>
            <Typography
              variant="subtitle2"
              color="text.secondary"
              sx={{ marginBottom: `${MARGIN_BETWEEN_DIVIDERS}px` }}
            >
              <DetailsList delimitedString={props.civ.team_bonus} />
            </Typography>

            <Divider textAlign="left" sx={{ marginBottom: `${MARGIN_BETWEEN_DIVIDERS}px` }}>
              <Typography fontWeight={DIVIDER_FONT_WEIGHT} variant="body2" color="text.secondary">
                Unique Units
              </Typography>
            </Divider>
            <Typography
              variant="subtitle2"
              color="text.secondary"
              sx={{ marginBottom: `${MARGIN_BETWEEN_DIVIDERS}px` }}
            >
              <UnitAccordions unique_units={props.civ.unique_unit} iconSize={ACCORDION_ICON_SIZE} />
            </Typography>
            <Divider textAlign="left" sx={{ marginBottom: `${MARGIN_BETWEEN_DIVIDERS}px` }}>
              <Typography fontWeight={DIVIDER_FONT_WEIGHT} variant="body2" color="text.secondary">
                Unique Techs
              </Typography>
            </Divider>
            <Typography
              variant="subtitle2"
              color="text.secondary"
              sx={{ marginBottom: `${MARGIN_BETWEEN_DIVIDERS}px` }}
            >
              <TechAccordions unique_techs={props.civ.unique_tech} iconSize={ACCORDION_ICON_SIZE} />
            </Typography>

            <Divider textAlign="left" sx={{ marginBottom: `${MARGIN_BETWEEN_DIVIDERS}px` }}>
              <Typography fontWeight={DIVIDER_FONT_WEIGHT} variant="body2" color="text.secondary">
                Unique Buildings
              </Typography>
            </Divider>
            <Typography
              variant="subtitle2"
              color="text.secondary"
              sx={{ marginBottom: `${MARGIN_BETWEEN_DIVIDERS}px` }}
            >
              <BuildingAccordions unique_buildings={props.civ.unique_buildings} iconSize={ACCORDION_ICON_SIZE} />
            </Typography>

            <Divider sx={{ marginBottom: `${MARGIN_BETWEEN_DIVIDERS}px` }} />

            <Grid container>
              <Grid item xs={6}>
                <Typography fontWeight={DIVIDER_FONT_WEIGHT} variant="body2" color="text.secondary">
                  Army Type
                </Typography>
                <Typography variant="subtitle2" color="text.secondary">
                  <DetailsList delimitedString={props.civ.army_type} />
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography fontWeight={DIVIDER_FONT_WEIGHT} variant="body2" color="text.secondary">
                  Expansion
                </Typography>
                <Typography variant="subtitle2" color="text.secondary">
                  <DetailsList delimitedString={props.civ.expansion} />
                </Typography>
              </Grid>
            </Grid>
          </>
        ) : null}
      </CardContent>
    </Card>
  );
}

export default React.memo(CivCompareDetails);
