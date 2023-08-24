import * as React from "react";
import { Typography } from "@mui/material";
import { Cost } from "../../types/Cost";
import { StatIcon } from "./StatIcon";

interface CostDisplayProps {
  costString: string;
}

const costValueVariant = "body2";
const marginBetweenCostSets = 12;
const marginBetweenIconAndValue = 4;

export function CostDisplay(props: CostDisplayProps) {
  const costObject: Cost = JSON.parse(props.costString);
  const { Wood, Food, Gold, Stone } = costObject;

  return (
    <div style={{ display: "inline-flex", alignItems: "center", marginTop: 6 }}>
      {/* Wood */}
      {Wood ? (
        <div style={{ display: "inline-flex", alignItems: "center", marginRight: marginBetweenCostSets }}>
          <StatIcon tooltip="Wood" fileName="wood" iconSize={32} />
          <Typography variant={costValueVariant} style={{ marginLeft: marginBetweenIconAndValue }}>
            {Wood}
          </Typography>
        </div>
      ) : null}
      {/* Food */}
      {Food ? (
        <div style={{ display: "inline-flex", alignItems: "center", marginRight: marginBetweenCostSets }}>
          <StatIcon tooltip="Food" fileName="food" iconSize={32} />
          <Typography variant={costValueVariant} style={{ marginLeft: marginBetweenIconAndValue }}>
            {Food}
          </Typography>
        </div>
      ) : null}
      {/* Gold */}
      {Gold ? (
        <div style={{ display: "inline-flex", alignItems: "center", marginRight: marginBetweenCostSets }}>
          <StatIcon tooltip="Gold" fileName="gold" iconSize={32} />
          <Typography variant={costValueVariant} style={{ marginLeft: marginBetweenIconAndValue }}>
            {Gold}
          </Typography>
        </div>
      ) : null}
      {/* Stone */}
      {Stone ? (
        <div style={{ display: "inline-flex", alignItems: "center", marginRight: marginBetweenCostSets }}>
          <StatIcon tooltip="Stone" fileName="stone" iconSize={32} />
          <Typography variant={costValueVariant} style={{ marginLeft: marginBetweenIconAndValue }}>
            {Stone}
          </Typography>
        </div>
      ) : null}
    </div>
  );
}
