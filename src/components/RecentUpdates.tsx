import * as React from "react";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Title from "./Title";

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

export default function RecentUpdates() {
  return (
    <React.Fragment>
      <Title>Recent Updates</Title>
      <Typography component="p" variant="h4">
        Working on it bitch
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        Missing latest update
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          Official AoE2 News
        </Link>
      </div>
    </React.Fragment>
  );
}
