import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { LIGHT_TAN_COLOR, TEXT_COLOR_MAIN } from "../../constants/colors";
import { Link as RouterLink } from "react-router-dom";
import Link from "@mui/material/Link";

export const DrawerToolsSection = (
  <React.Fragment>
    <ListSubheader component="div" inset sx={{ backgroundColor: LIGHT_TAN_COLOR }}>
      Tools
    </ListSubheader>

    <Link
      title="Compare Civilizations"
      component={RouterLink}
      to="/"
      style={{ textDecoration: "none", color: TEXT_COLOR_MAIN }}
    >
      <ListItemButton>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Compare Civs" />
      </ListItemButton>
    </Link>
  </React.Fragment>
);

export const DrawerDataTablesSection = (
  <React.Fragment>
    <ListSubheader component="div" inset sx={{ backgroundColor: LIGHT_TAN_COLOR }}>
      Data Tables
    </ListSubheader>

    <Link
      title="Unit Data"
      component={RouterLink}
      to="/data/units"
      style={{ textDecoration: "none", color: TEXT_COLOR_MAIN }}
    >
      <ListItemButton>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Units" />
      </ListItemButton>
    </Link>

    <Link
      title="Civilization Data"
      component={RouterLink}
      to="/data/civs"
      style={{ textDecoration: "none", color: TEXT_COLOR_MAIN }}
    >
      <ListItemButton>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Civilizations" />
      </ListItemButton>
    </Link>

    <Link
      title="Technology Data"
      component={RouterLink}
      to="/data/techs"
      style={{ textDecoration: "none", color: TEXT_COLOR_MAIN }}
    >
      <ListItemButton>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Technologies" />
      </ListItemButton>
    </Link>

    <Link
      title="Building Data"
      component={RouterLink}
      to="/data/buildings"
      style={{ textDecoration: "none", color: TEXT_COLOR_MAIN }}
    >
      <ListItemButton>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Buildings" />
      </ListItemButton>
    </Link>
  </React.Fragment>
);

export const DrawerLinksSection = (
  <React.Fragment>
    <ListSubheader component="div" inset sx={{ backgroundColor: LIGHT_TAN_COLOR }}>
      Links
    </ListSubheader>

    <Link
      href="https://aoe2recs.com/"
      rel="noopener noreferrer"
      target="_blank"
      style={{ textDecoration: "none", color: TEXT_COLOR_MAIN }}
      title="aoe2recs Dashboard"
    >
      <ListItemButton>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="aoe2recs.com" secondary="Matchmaking Activity" />
      </ListItemButton>
    </Link>

    <Link
      href="https://liquipedia.net/ageofempires/Main_Page"
      rel="noopener noreferrer"
      target="_blank"
      style={{ textDecoration: "none", color: TEXT_COLOR_MAIN }}
      title="Liquipedia"
    >
      <ListItemButton>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="liquipedia.net" secondary="Tournament Info" />
      </ListItemButton>
    </Link>

    <Link
      href="https://www.unitstatistics.com/age-of-empires2/"
      rel="noopener noreferrer"
      target="_blank"
      style={{ textDecoration: "none", color: TEXT_COLOR_MAIN }}
      title="More Unit Statistics"
    >
      <ListItemButton>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="unitstatistics.com" secondary="More Unit Data" />
      </ListItemButton>
    </Link>

    <Link
      href="https://aoe2techtree.net/#Aztecs"
      rel="noopener noreferrer"
      target="_blank"
      style={{ textDecoration: "none", color: TEXT_COLOR_MAIN }}
      title="Civilization Tech Trees"
    >
      <ListItemButton>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="aoe2techtree.net" secondary="Full Tech Trees" />
      </ListItemButton>
    </Link>
    <Link
      href="https://www.ageofempires.com/news?game=aoeii"
      rel="noopener noreferrer"
      target="_blank"
      style={{ textDecoration: "none", color: TEXT_COLOR_MAIN }}
      title="Official AOE2 News"
    >
      <ListItemButton>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Official News" secondary="See Patch Notes" />
      </ListItemButton>
    </Link>
  </React.Fragment>
);
