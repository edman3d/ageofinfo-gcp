import * as React from "react";
import { Typography } from "@mui/material";
import { Cost } from "../../types/Cost";
import { StatIcon } from "./StatIcon";

interface CostDisplayProps {
  costObject: Cost;
}

const costValueVariant = "body2";
const marginBetweenCostSets = 12;
const marginBetweenIconAndValue = 4;

export function CostDisplay(props: CostDisplayProps) {
  const hasWoodCost = props.costObject.Wood !== undefined && props.costObject.Wood > 0;
  const hasFoodCost = props.costObject.Food !== undefined && props.costObject.Food > 0;
  const hasGoldCost = props.costObject.Gold !== undefined && props.costObject.Gold > 0;
  const hasStoneCost = props.costObject.Stone !== undefined && props.costObject.Stone > 0;

  return (
    <div style={{ display: "inline-flex", alignItems: "center", marginTop: 6 }}>
      {/* Wood */}
      {hasWoodCost ? (
        <div style={{ display: "inline-flex", alignItems: "center", marginRight: marginBetweenCostSets }}>
          <StatIcon tooltip="Wood" fileName="wood" iconSize={32} />
          <Typography variant={costValueVariant} style={{ marginLeft: marginBetweenIconAndValue }}>
            {props.costObject.Wood}
          </Typography>
        </div>
      ) : null}
      {/* Food */}
      {hasFoodCost ? (
        <div style={{ display: "inline-flex", alignItems: "center", marginRight: marginBetweenCostSets }}>
          <StatIcon tooltip="Food" fileName="food" iconSize={32} />
          <Typography variant={costValueVariant} style={{ marginLeft: marginBetweenIconAndValue }}>
            {props.costObject.Food}
          </Typography>
        </div>
      ) : null}
      {/* Gold */}
      {hasGoldCost ? (
        <div style={{ display: "inline-flex", alignItems: "center", marginRight: marginBetweenCostSets }}>
          <StatIcon tooltip="Gold" fileName="gold" iconSize={32} />
          <Typography variant={costValueVariant} style={{ marginLeft: marginBetweenIconAndValue }}>
            {props.costObject.Gold}
          </Typography>
        </div>
      ) : null}
      {/* Stone */}
      {hasStoneCost ? (
        <div style={{ display: "inline-flex", alignItems: "center", marginRight: marginBetweenCostSets }}>
          <StatIcon tooltip="Stone" fileName="stone" iconSize={32} />
          <Typography variant={costValueVariant} style={{ marginLeft: marginBetweenIconAndValue }}>
            {props.costObject.Stone}
          </Typography>
        </div>
      ) : null}
    </div>
  );
}
