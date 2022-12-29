import * as React from "react";
import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import type { Civilization } from "../types";

const marginBottom = "10px"; // margin between stat rows

type CivCompareDetailsProps = {
  civ?: Civilization | null;
};

export default function CivCompareDetails(props: CivCompareDetailsProps) {
  return (
    <Card sx={{ height: 600 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={
            props.civ
              ? require(`../images/civilizations/${props.civ?.image}.png`)
              : require("../images/aoe2-de-hi-res-bg.jpg")
          }
          alt="civ banner"
        />
        <CardContent sx={{ height: 600 }}>
          {props.civ ? (
            <>
              <Typography gutterBottom variant="h5" component="div">
                {props.civ.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Army Type
              </Typography>
              <Typography variant="subtitle2" color="text.secondary" sx={{ marginBottom: marginBottom }}>
                {props.civ.army_type}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Expansion
              </Typography>
              <Typography variant="subtitle2" color="text.secondary" sx={{ marginBottom: marginBottom }}>
                {props.civ.expansion}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Unique Unit
              </Typography>
              <Typography variant="subtitle2" color="text.secondary" sx={{ marginBottom: marginBottom }}>
                {props.civ.unique_unit}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Unique Tech
              </Typography>
              <Typography variant="subtitle2" color="text.secondary" sx={{ marginBottom: marginBottom }}>
                {props.civ.unique_tech}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Team Bonus
              </Typography>
              <Typography variant="subtitle2" color="text.secondary" sx={{ marginBottom: marginBottom }}>
                {props.civ.team_bonus}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Civ Bonus
              </Typography>
              <Typography variant="subtitle2" color="text.secondary" sx={{ marginBottom: marginBottom }}>
                {props.civ.civilization_bonus}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Unique Buildings
              </Typography>
              <Typography variant="subtitle2" color="text.secondary">
                {props.civ.unique_buildings.length > 0 ? props.civ.unique_buildings : "None"}
              </Typography>
            </>
          ) : (
            <Typography gutterBottom variant="h5" component="div">
              Select a Civilization
            </Typography>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
