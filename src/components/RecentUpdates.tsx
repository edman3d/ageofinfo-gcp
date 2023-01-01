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
      <Title>Useful Links</Title>
      <Typography component="p" variant="h4">
        Wowza
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        Site data is 1 patch behind
      </Typography>
      <div>
        <Link color="primary" href="https://www.ageofempires.com/games/aoeiide/" target="_blank">
          Official AoE2 News
        </Link>
      </div>
      <div>
        <Link color="primary" href="https://aoe2recs.com/" target="_blank">
          aoe2recs.com
        </Link>
      </div>
      <div>
        <Link color="primary" href="https://liquipedia.net/ageofempires/Main_Page" target="_blank">
          liquipedia.net
        </Link>
      </div>
      <div>
        <Link color="primary" href="https://aoe2.gg/" target="_blank">
          aoe2.gg
        </Link>
      </div>
    </React.Fragment>
  );
}
