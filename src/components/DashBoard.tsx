import * as React from "react";
import { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Badge, Box, Container, CssBaseline, Divider, List, IconButton, Toolbar, Typography } from "@mui/material";
import {
  ChevronLeft as ChevronLeftIcon,
  Menu as MenuIcon,
  Notifications as NotificationsIcon,
} from "@mui/icons-material";

import { Routes, Route } from "react-router-dom";
import type { Building, Civilization, Technology, Unit } from "../types";
import { BuildingContext, CivContext, TechContext, UnitContext } from "../contexts";
import { DARK_TAN_COLOR } from "../constants/colors";

import { AppBar } from "./AppBar";
import { Drawer } from "./Drawer";
import Copyright from "./Copyright";
import { mainListItems, secondaryListItems } from "./listItems";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import CivComparePage from "../pages/CivComparePage";
// Data Tables
import CivDataPage from "../pages/CivDataPage";
import TechDataPage from "../pages/TechDataPage";
import BuildingDataPage from "../pages/BuildingDataPage";
import UnitDataPage from "../pages/UnitDataPage";

let unitData: Unit[] = require("./../data/units.json");
let techData: Technology[] = require("./../data/techs.json");
let civData: Civilization[] = require("./../data/civs.json");
let buildingData: Building[] = require("./../data/buildings.json");

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
                      <MenuIcon sx={{ color: DARK_TAN_COLOR }} />
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
                    <Routes>
                      <Route path="/" element={<CivComparePage />} />
                      <Route path="/civdata" element={<CivDataPage />} />
                      <Route path="/unitdata" element={<UnitDataPage />} />
                      <Route path="/techdata" element={<TechDataPage />} />
                      <Route path="/buildingdata" element={<BuildingDataPage />} />
                    </Routes>
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
