import * as React from "react";
import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import type { Civilization } from "../types";
import DetailsList from "./DetailsList";

import { useContext, useState } from "react";
import { UnitContext } from "../contexts/UnitContext";
import { CivContext } from "../contexts/CivContext";
import { TechContext } from "../contexts/TechContext";

import { LIGHT_TAN_COLOR, MEDIUM_TAN_COLOR, DARK_TAN_COLOR } from "../constants/colors";

import UnitAccordions from "./Accordions/UnitAccordions";

const marginBottom = "10px"; // margin between stat rows
const paddingLeft = "0px";

type CivCompareDetailsProps = {
  civ?: Civilization | null;
};

export default function CivCompareDetails(props: CivCompareDetailsProps) {
  const units = useContext(UnitContext);
  const civs = useContext(CivContext);
  const techs = useContext(TechContext);

  console.log(`unit context found ${units?.length} units`);
  console.log(`civs context found ${civs?.length} civs`);
  console.log(`techs context found ${techs?.length} techs`);

  return (
    <Card sx={{ height: 750, backgroundColor: LIGHT_TAN_COLOR }}>
      <div style={{ display: "flex", alignItems: "center", paddingLeft: 4, paddingTop: 4 }}>
        <CardMedia
          component="img"
          height="140"
          image={
            props.civ
              ? require(`../images/civilizations/${props.civ?.image}.png`)
              : require("../images/staticons/convert.png")
          }
          alt="civ banner"
          sx={{ height: "64px", width: "64px" }}
        />
        <Typography variant="h5" sx={{ marginLeft: 1 }}>
          {props.civ ? props.civ.name : "Select a Civilization"}
        </Typography>
      </div>
      <CardContent sx={{ height: 750 }}>
        {props.civ ? (
          <>
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
            <Typography variant="body2" color="text.secondary">
              Unique Unit/s
            </Typography>
            <Typography
              variant="subtitle2"
              color="text.secondary"
              sx={{ marginBottom: marginBottom, paddingLeft: paddingLeft }}
            >
              {/* <DetailsList delimitedString={props.civ.unique_unit} /> */}
              <UnitAccordions unique_units={props.civ.unique_unit} />
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Unique Techs (could make these a dropdown with tech info)
            </Typography>
            <Typography
              variant="subtitle2"
              color="text.secondary"
              sx={{ marginBottom: marginBottom, paddingLeft: paddingLeft }}
            >
              <DetailsList delimitedString={props.civ.unique_tech} />
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Team Bonus
            </Typography>
            <Typography
              variant="subtitle2"
              color="text.secondary"
              sx={{ marginBottom: marginBottom, paddingLeft: paddingLeft }}
            >
              <DetailsList delimitedString={props.civ.team_bonus} />
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Civ Bonus
            </Typography>
            <Typography
              variant="subtitle2"
              color="text.secondary"
              sx={{ marginBottom: marginBottom, paddingLeft: paddingLeft }}
            >
              <DetailsList delimitedString={props.civ.civilization_bonus} />
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Unique Building/s
            </Typography>
            <Typography variant="subtitle2" color="text.secondary">
              {props.civ.unique_buildings.length > 0 ? (
                <DetailsList delimitedString={props.civ.unique_buildings} />
              ) : (
                <DetailsList delimitedString={"None"} />
              )}
            </Typography>
          </>
        ) : null}
      </CardContent>
    </Card>
  );
}
