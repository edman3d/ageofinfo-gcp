import * as React from "react";

import { StatIcon } from "./StatIcon";

interface StatIconWithValueProps {
  fileName: string;
  iconSize: number;
  value: number;
}

export function StatIconWithValue(props: StatIconWithValueProps) {
  const hasValue = props.value && props.value > 0;
  return (
    <div style={{ display: "inline-flex", alignItems: "center" }}>
      {hasValue ?? <StatIcon fileName={props.fileName} iconSize={props.iconSize} />}
      {hasValue ?? props.value}
    </div>
  );
}
