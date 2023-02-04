import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItemLink from "@mui/material/List";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { LIGHT_TAN_COLOR, MEDIUM_TAN_COLOR, DARK_TAN_COLOR, TEXT_COLOR_MAIN } from "../constants/colors";
import { Link as RouterLink } from "react-router-dom";
import Link from "@mui/material/Link";
export const mainListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset sx={{ backgroundColor: LIGHT_TAN_COLOR }}>
      Tools
    </ListSubheader>

    <Link component={RouterLink} to="/" style={{ textDecoration: "none", color: TEXT_COLOR_MAIN }}>
      <ListItemButton>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Compare Civs" />
      </ListItemButton>
    </Link>

    {/* <Link component={RouterLink} to="civdata" style={{ textDecoration: "none", color: TEXT_COLOR_MAIN }}>
      <ListItemButton>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Compare Units" />
      </ListItemButton>
    </Link> */}
  </React.Fragment>
);

// <Route path="/" element={<CivComparePage />} />
// <Route path="/civdata" element={<CivDataPage />} />
// <Route path="/unitdata" element={<UnitDataPage />} />
// <Route path="/techdata" element={<TechDataPage />} />
// <Route path="/buildingdata" element={<BuildingDataPage />} />

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset sx={{ backgroundColor: LIGHT_TAN_COLOR }}>
      Data Tables
    </ListSubheader>

    <Link component={RouterLink} to="unitdata" style={{ textDecoration: "none", color: TEXT_COLOR_MAIN }}>
      <ListItemButton>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Units" />
      </ListItemButton>
    </Link>

    <Link component={RouterLink} to="civdata" style={{ textDecoration: "none", color: TEXT_COLOR_MAIN }}>
      <ListItemButton>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Civilizations" />
      </ListItemButton>
    </Link>

    <Link component={RouterLink} to="techdata" style={{ textDecoration: "none", color: TEXT_COLOR_MAIN }}>
      <ListItemButton>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Technologies" />
      </ListItemButton>
    </Link>

    <Link component={RouterLink} to="buildingdata" style={{ textDecoration: "none", color: TEXT_COLOR_MAIN }}>
      <ListItemButton>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Buildings" />
      </ListItemButton>
    </Link>
  </React.Fragment>
);
