import * as React from "react";
import { Accordion, AccordionDetails, AccordionSummary, CardMedia, Grid, Typography } from "@mui/material";

import StatIcon from "./StatIcon";

interface StatIconWithValueProps {
  fileName: string;
  iconSize: number;
  value: number;
}

export default function StatIconWithValue(props: StatIconWithValueProps) {
  console.log(props.value);
  const hasValue = props.value && props.value > 0;
  console.log(hasValue);
  return (
    <div style={{ display: "inline-flex", alignItems: "center" }}>
      {hasValue ?? <StatIcon fileName={props.fileName} iconSize={props.iconSize} />}
      {hasValue ?? props.value}
    </div>
  );
}
