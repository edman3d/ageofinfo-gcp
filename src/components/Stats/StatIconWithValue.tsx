import * as React from "react";
import { Typography } from "@mui/material";
import StatIcon from "./StatIcon";

interface StatIconWithValueProps {
  fileName: string;
  iconSize?: number;
  tooltip?: string;
  value: number;
}

function StatIconWithValue({ fileName, iconSize = 32, tooltip, value }: StatIconWithValueProps) {
  const hasValue = value && value > 0;

  if (hasValue) {
    return (
      <div style={{ display: "inline-flex", alignItems: "center", marginRight: 12 }}>
        <StatIcon fileName={fileName} iconSize={iconSize} tooltip={tooltip} />
        <Typography variant="body2" style={{ marginLeft: 4 }}>
          {value.toString()}
        </Typography>
      </div>
    );
  }
  return null;
}

export default React.memo(StatIconWithValue);
