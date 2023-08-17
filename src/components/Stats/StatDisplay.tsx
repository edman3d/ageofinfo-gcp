import * as React from "react";
import { Typography } from "@mui/material";
import { StatIcon } from "./StatIcon";
import type { Unit } from "../../types";

interface StatDisplayProps {
  unit: Unit;
}

const costValueVariant = "body2";
const marginBetweenCostSets = 12;
const marginBetweenIconAndValue = 4;

export function StatDisplay(props: StatDisplayProps) {
  const { attack, hit_points, melee_armor, ranged_armor, min_range, max_range } = props.unit;

  return (
    <div style={{ display: "inline-flex", alignItems: "center", marginTop: 6 }}>
      <div style={{ display: "inline-flex", alignItems: "center", marginRight: marginBetweenCostSets }}>
        <StatIcon tooltip="Hit Points" fileName="hp" iconSize={32} />
        <Typography variant={costValueVariant} style={{ marginLeft: marginBetweenIconAndValue }}>
          {hit_points}
        </Typography>
      </div>
      <div style={{ display: "inline-flex", alignItems: "center", marginRight: marginBetweenCostSets }}>
        <StatIcon tooltip="Damage" fileName="damage" iconSize={32} />
        <Typography variant={costValueVariant} style={{ marginLeft: marginBetweenIconAndValue }}>
          {attack}
        </Typography>
      </div>
      <div style={{ display: "inline-flex", alignItems: "center", marginRight: marginBetweenCostSets }}>
        <StatIcon tooltip="Melee Armor" fileName="armor" iconSize={32} />
        <Typography variant={costValueVariant} style={{ marginLeft: marginBetweenIconAndValue }}>
          {melee_armor}
        </Typography>
      </div>
      <div style={{ display: "inline-flex", alignItems: "center", marginRight: marginBetweenCostSets }}>
        <StatIcon tooltip="Ranged Armor" fileName="range-armor" iconSize={32} />
        <Typography variant={costValueVariant} style={{ marginLeft: marginBetweenIconAndValue }}>
          {ranged_armor}
        </Typography>
      </div>
      <div style={{ display: "inline-flex", alignItems: "center", marginRight: marginBetweenCostSets }}>
        <StatIcon tooltip="Range" fileName="range" iconSize={32} />
        <Typography variant={costValueVariant} style={{ marginLeft: marginBetweenIconAndValue }}>
          {max_range} {max_range === 0 ? "(Melee)" : null} {min_range !== 0 ? `(${min_range} minimum)` : null}
        </Typography>
      </div>
    </div>
  );
}
