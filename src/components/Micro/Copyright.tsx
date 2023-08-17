import { Link, Typography } from "@mui/material";
import preval from "preval.macro";

export function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {"Copyright © "}
      <Link color="inherit">edman3d</Link> {new Date().getFullYear()}
      {" | "}
      Last Build Date: {preval`module.exports = new Date().toLocaleString();`}
    </Typography>
  );
}
