import * as React from "react";
import { Card, CardContent, CardMedia, Divider, Grid, Typography } from "@mui/material";
import type { Civilization } from "../../types";
import DetailsList from "./DetailsList";
import { LIGHT_TAN_COLOR } from "../../constants/colors";
import { BuildingAccordions, TechAccordions, UnitAccordions } from "../Accordions";

const marginBottom = "10px"; // margin between stat rows
const paddingLeft = "0px";

type CivCompareDetailsProps = {
  civ?: Civilization | null;
};

export default function CivCompareDetails(props: CivCompareDetailsProps) {
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
          alt="civ banner"
          sx={{ height: "64px", width: "64px" }}
        />
        <Typography variant="h5" fontWeight={500} sx={{ marginLeft: 1 }}>
          {props.civ ? props.civ.name : "Select a Civilization"}
        </Typography>
      </div>
      <CardContent sx={{ height: 750, paddingTop: "0" }}>
        {props.civ ? (
          <>
            <Divider textAlign="left">
              <Typography variant="body2" color="text.secondary">
                Civ Bonus
              </Typography>
            </Divider>
            <Typography
              variant="subtitle2"
              color="text.secondary"
              sx={{ marginBottom: marginBottom, paddingLeft: paddingLeft }}
            >
              <DetailsList delimitedString={props.civ.civilization_bonus} />
            </Typography>

            <Divider textAlign="left">
              <Typography variant="body2" color="text.secondary">
                Team Bonus
              </Typography>
            </Divider>
            <Typography
              variant="subtitle2"
              color="text.secondary"
              sx={{ marginBottom: marginBottom, paddingLeft: paddingLeft }}
            >
              <DetailsList delimitedString={props.civ.team_bonus} />
            </Typography>

            <Divider textAlign="left" sx={{ marginBottom: "6px" }}>
              <Typography variant="body2" color="text.secondary">
                Unique Units
              </Typography>
            </Divider>
            <Typography
              variant="subtitle2"
              color="text.secondary"
              sx={{ marginBottom: marginBottom, paddingLeft: paddingLeft }}
            >
              <UnitAccordions unique_units={props.civ.unique_unit} />
            </Typography>
            <Divider textAlign="left" sx={{ marginBottom: "6px" }}>
              <Typography variant="body2" color="text.secondary">
                Unique Techs
              </Typography>
            </Divider>
            <Typography
              variant="subtitle2"
              color="text.secondary"
              sx={{ marginBottom: marginBottom, paddingLeft: paddingLeft }}
            >
              <TechAccordions unique_techs={props.civ.unique_tech} />
            </Typography>

            <Divider textAlign="left" sx={{ marginBottom: "6px" }}>
              <Typography variant="body2" color="text.secondary">
                Unique Buildings
              </Typography>
            </Divider>
            <Typography
              variant="subtitle2"
              color="text.secondary"
              sx={{ marginBottom: marginBottom, paddingLeft: paddingLeft }}
            >
              <BuildingAccordions unique_buildings={props.civ.unique_buildings} />
            </Typography>

            <Grid container>
              <Grid item xs={6}>
                <Typography variant="body2" color="text.secondary">
                  Army Type
                </Typography>
                <Typography
                  variant="subtitle2"
                  color="text.secondary"
                  sx={{ marginBottom: marginBottom, paddingLeft: paddingLeft }}
                >
                  <DetailsList delimitedString={props.civ.army_type} />
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2" color="text.secondary">
                  Expansion
                </Typography>
                <Typography
                  variant="subtitle2"
                  color="text.secondary"
                  sx={{ marginBottom: marginBottom, paddingLeft: paddingLeft }}
                >
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