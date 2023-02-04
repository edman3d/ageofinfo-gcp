import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { mainListItems, secondaryListItems } from "./listItems";
import Chart from "./Chart";
import RecentUpdates from "./RecentUpdates";
import Orders from "./Orders";
import DataGridCivs from "./DataGridCivs";
import CivCompare from "./CivCompare";
// react router tutorial to use https://www.youtube.com/watch?v=2aumoR0-jmQ
import type { Building, Civilization, Technology, Unit } from "../types";
import { useState } from "react";
import { UnitContext } from "../contexts/UnitContext";
import { CivContext } from "../contexts/CivContext";
import { TechContext } from "../contexts/TechContext";
import { BuildingContext } from "../contexts/BuildingContext";

import { LIGHT_TAN_COLOR, MEDIUM_TAN_COLOR, DARK_TAN_COLOR } from "../constants/colors";

import Copyright from "./Copyright";

let unitData: Unit[] = require("./../data/units.json");
let techData: Technology[] = require("./../data/techs.json");
let civData: Civilization[] = require("./../data/civs.json");
let buildingData: Building[] = require("./../data/buildings.json");

const drawerWidth: number = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  backgroundColor: MEDIUM_TAN_COLOR,
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== "open" })(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const mdTheme = createTheme();

function DashboardContent() {
  const [open, setOpen] = useState(true);
  const [units, setUnits] = useState(unitData);
  const [civs, setCivs] = useState(civData);
  const [techs, setTechs] = useState(techData);
  const [buildings, setBuildings] = useState(buildingData);
  // console.log(`found ${buildings.length} buildings`);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <BuildingContext.Provider value={buildings}>
      <TechContext.Provider value={techs}>
        <CivContext.Provider value={civs}>
          <UnitContext.Provider value={units}>
            <ThemeProvider theme={mdTheme}>
              <Box sx={{ display: "flex" }}>
                <CssBaseline />
                <AppBar position="absolute" open={open}>
                  <Toolbar
                    sx={{
                      pr: "24px", // keep right padding when drawer closed
                    }}
                  >
                    <IconButton
                      edge="start"
                      color="inherit"
                      aria-label="open drawer"
                      onClick={toggleDrawer}
                      sx={{
                        marginRight: "36px",
                        ...(open && { display: "none" }),
                      }}
                    >
                      <MenuIcon />
                    </IconButton>
                    <Typography component="h1" variant="h6" color="black" noWrap sx={{ flexGrow: 1 }}>
                      AgeOfInfo Dashboard
                    </Typography>
                    <IconButton color="inherit">
                      <Badge badgeContent={4} color="secondary">
                        <NotificationsIcon />
                      </Badge>
                    </IconButton>
                  </Toolbar>
                </AppBar>
                <Drawer variant="permanent" open={open}>
                  <Toolbar
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-end",
                      px: [1],
                    }}
                  >
                    <IconButton onClick={toggleDrawer}>
                      <ChevronLeftIcon />
                    </IconButton>
                  </Toolbar>
                  <Divider />
                  <List component="nav">
                    {mainListItems}
                    <Divider sx={{ my: 1 }} />
                    {secondaryListItems}
                  </List>
                </Drawer>
                <Box
                  component="main"
                  sx={{
                    backgroundColor: DARK_TAN_COLOR,
                    flexGrow: 1,
                    height: "100vh",
                    overflow: "auto",
                  }}
                >
                  <Toolbar />
                  <Container maxWidth="xl" sx={{ mt: 4, mb: 4, backgroundColor: DARK_TAN_COLOR }}>
                    <Grid container spacing={3}>
                      {/* Civilization Compare Section */}
                      <Grid item xs={12}>
                        <Paper
                          sx={{ p: 2, display: "flex", flexDirection: "column", backgroundColor: MEDIUM_TAN_COLOR }}
                        >
                          <CivCompare />
                        </Paper>
                      </Grid>
                    </Grid>
                    <Copyright sx={{ pt: 4 }} />
                  </Container>
                </Box>
              </Box>
            </ThemeProvider>
          </UnitContext.Provider>
        </CivContext.Provider>
      </TechContext.Provider>
    </BuildingContext.Provider>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
