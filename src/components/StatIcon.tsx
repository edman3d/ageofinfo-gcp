import * as React from "react";
import { Accordion, AccordionDetails, AccordionSummary, CardMedia, Grid, Typography } from "@mui/material";

interface StatIconProps {
  fileName: string;
  iconSize: number;
}

export default function StatIcon(props: StatIconProps) {
  return (
    <CardMedia
      component="img"
      height="140"
      image={require(`../images/staticons/${props.fileName}.png`)}
      alt={`${props.fileName}-icon`}
      sx={{ height: props.iconSize, width: props.iconSize }}
    />
  );
}
