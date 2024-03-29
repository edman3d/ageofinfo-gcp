import * as React from "react";
import { CardMedia } from "@mui/material";

interface StatIconProps {
  fileName: string;
  iconSize: number;
  tooltip?: string;
}

function StatIcon(props: StatIconProps) {
  return (
    <CardMedia
      component="img"
      height="140"
      image={require(`../../images/staticons/${props.fileName}.png`)}
      alt={`${props.fileName}-icon`}
      sx={{ height: `${props.iconSize}px`, width: `${props.iconSize}px` }}
      title={props.tooltip ? props.tooltip : "StatIcon"}
    />
  );
}

export default React.memo(StatIcon);
