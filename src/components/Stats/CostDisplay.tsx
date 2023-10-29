import * as React from "react";
import { Cost } from "../../types/Cost";
import StatIconWithValue from "./StatIconWithValue";

type CostDisplayProps = {
  costString?: string;
};

function CostDisplay(props: CostDisplayProps) {
  const costObject: Cost = props.costString ? JSON.parse(props.costString) : {};
  const { Wood, Food, Gold, Stone } = costObject;

  return (
    <div style={{ display: "inline-flex", alignItems: "center", marginTop: 6 }}>
      {Wood ? <StatIconWithValue fileName="wood" value={Wood} tooltip="Wood" /> : null}
      {Food ? <StatIconWithValue fileName="food" value={Food} tooltip="Food" /> : null}
      {Gold ? <StatIconWithValue fileName="gold" value={Gold} tooltip="Gold" /> : null}
      {Stone ? <StatIconWithValue fileName="stone" value={Stone} tooltip="Stone" /> : null}
    </div>
  );
}

export default React.memo(CostDisplay);
