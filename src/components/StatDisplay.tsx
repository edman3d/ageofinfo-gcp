import * as React from "react";
import { Accordion, AccordionDetails, AccordionSummary, CardMedia, Grid, Typography } from "@mui/material";
import { CostType } from "../util/getCost";
import StatIcon from "./StatIcon";
import type { Unit } from "../types";

interface StatDisplayProps {
  unit: Unit;
}

const costValueVariant = "body2";
const marginBetweenCostSets = 12;
const marginBetweenIconAndValue = 4;

export default function StatDisplay(props: StatDisplayProps) {
  //   console.log(props.unit);

  const { attack, hit_points, range } = props.unit;

  const meleeArmor = props.unit.armor.split("/")[0];
  const rangedArmor = props.unit.armor.split("/")[1];

  return (
    <div style={{ display: "inline-flex", alignItems: "center", marginTop: 6, border: "1px solid orange" }}>
      <div style={{ display: "inline-flex", alignItems: "center", marginRight: marginBetweenCostSets }}>
        <StatIcon fileName="hp" iconSize={32} />
        <Typography variant={costValueVariant} style={{ marginLeft: marginBetweenIconAndValue }}>
          {hit_points}
        </Typography>
      </div>
      <div style={{ display: "inline-flex", alignItems: "center", marginRight: marginBetweenCostSets }}>
        <StatIcon fileName="damage" iconSize={32} />
        <Typography variant={costValueVariant} style={{ marginLeft: marginBetweenIconAndValue }}>
          {attack}
        </Typography>
      </div>
      <div style={{ display: "inline-flex", alignItems: "center", marginRight: marginBetweenCostSets }}>
        <StatIcon fileName="armor" iconSize={32} />
        <Typography variant={costValueVariant} style={{ marginLeft: marginBetweenIconAndValue }}>
          {meleeArmor}
        </Typography>
      </div>
      <div style={{ display: "inline-flex", alignItems: "center", marginRight: marginBetweenCostSets }}>
        <StatIcon fileName="range-armor" iconSize={32} />
        <Typography variant={costValueVariant} style={{ marginLeft: marginBetweenIconAndValue }}>
          {rangedArmor}
        </Typography>
      </div>
      <div style={{ display: "inline-flex", alignItems: "center", marginRight: marginBetweenCostSets }}>
        <StatIcon fileName="range" iconSize={32} />
        <Typography variant={costValueVariant} style={{ marginLeft: marginBetweenIconAndValue }}>
          {range}
        </Typography>
      </div>
    </div>
  );
}
