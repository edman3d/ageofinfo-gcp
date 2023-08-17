import * as React from "react";
import { CardMedia } from "@mui/material";

interface StatIconProps {
  fileName: string;
  iconSize: number;
  tooltip?: string;
}

export function StatIcon(props: StatIconProps) {
  return (
    <CardMedia
      component="img"
      height="140"
      image={require(`../../images/staticons/${props.fileName}.png`)}
      alt={`${props.fileName}-icon`}
      sx={{ height: props.iconSize, width: props.iconSize }}
      title={props.tooltip ? props.tooltip : "StatIcon"}
    />
  );
}
