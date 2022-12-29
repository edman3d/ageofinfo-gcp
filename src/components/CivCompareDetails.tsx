import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { CardActionArea } from "@mui/material";

import type { Civilization } from "../types";

import "../css/Civilizations.css";
let civs: Civilization[] = require("./../data/civs.json");

const testCiv = civs[1];
console.log(testCiv);

const marginBottom = "10px";

export default function CivCompareDetails() {
  return (
    <Card sx={{ height: 600 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={require("../images/civilizations/bengalis.png")}
          alt="green iguana"
        />
        <CardContent sx={{ height: 600 }}>
          <Typography gutterBottom variant="h5" component="div">
            {testCiv.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Army Type
          </Typography>
          <Typography variant="subtitle2" color="text.secondary" sx={{ marginBottom: marginBottom }}>
            {testCiv.army_type}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Expansion
          </Typography>
          <Typography variant="subtitle2" color="text.secondary" sx={{ marginBottom: marginBottom }}>
            {testCiv.expansion}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Unique Unit
          </Typography>
          <Typography variant="subtitle2" color="text.secondary" sx={{ marginBottom: marginBottom }}>
            {testCiv.unique_unit}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Unique Tech
          </Typography>
          <Typography variant="subtitle2" color="text.secondary" sx={{ marginBottom: marginBottom }}>
            {testCiv.unique_tech}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Team Bonus
          </Typography>
          <Typography variant="subtitle2" color="text.secondary" sx={{ marginBottom: marginBottom }}>
            {testCiv.team_bonus}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Civ Bonus
          </Typography>
          <Typography variant="subtitle2" color="text.secondary" sx={{ marginBottom: marginBottom }}>
            {testCiv.civilization_bonus}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Unique Buildings
          </Typography>
          <Typography variant="subtitle2" color="text.secondary">
            {testCiv.unique_buildings.length > 0 ? testCiv.unique_buildings : "None"}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
