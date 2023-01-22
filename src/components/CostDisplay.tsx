import * as React from "react";
// import { Accordion, AccordionDetails, AccordionSummary, CardMedia, Grid, Typography } from "@mui/material";
import { CostType } from "../util/getCost";
import StatIcon from "./StatIcon";

interface CostDisplayProps {
  costObject: CostType;
}

export default function CostDisplay(props: CostDisplayProps) {
  const hasWoodCost = props.costObject.Wood !== undefined && props.costObject.Wood > 0;
  const hasFoodCost = props.costObject.Food !== undefined && props.costObject.Food > 0;
  const hasGoldCost = props.costObject.Gold !== undefined && props.costObject.Gold > 0;
  const hasStoneCost = props.costObject.Stone !== undefined && props.costObject.Stone > 0;

  return (
    <>
      <div style={{ display: "inline-flex", alignItems: "center", marginTop: 6 }}>
        {/* Wood */}
        {hasWoodCost ? (
          <div style={{ display: "inline-flex", alignItems: "center", marginRight: 12 }}>
            <StatIcon fileName="wood" iconSize={32} />
            <div style={{ marginLeft: 2 }}>{props.costObject.Wood}</div>
          </div>
        ) : null}
        {/* Food */}
        {hasFoodCost ? (
          <div style={{ display: "inline-flex", alignItems: "center", marginRight: 12 }}>
            <StatIcon fileName="food" iconSize={32} />
            <div style={{ marginLeft: 2 }}>{props.costObject.Food}</div>
          </div>
        ) : null}
        {/* Gold */}
        {hasGoldCost ? (
          <div style={{ display: "inline-flex", alignItems: "center", marginRight: 12 }}>
            <StatIcon fileName="gold" iconSize={32} />
            <div style={{ marginLeft: 2 }}>{props.costObject.Gold}</div>
          </div>
        ) : null}
        {/* Stone */}
        {hasStoneCost ? (
          <div style={{ display: "inline-flex", alignItems: "center", marginRight: 12 }}>
            <StatIcon fileName="stone" iconSize={32} />
            <div style={{ marginLeft: 2 }}>{props.costObject.Stone}</div>
          </div>
        ) : null}
      </div>
    </>
  );
}
