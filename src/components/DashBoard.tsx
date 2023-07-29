import * as React from "react";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Badge, Box, Container, CssBaseline, Divider, List, IconButton, Toolbar, Typography } from "@mui/material";
import {
  ChevronLeft as ChevronLeftIcon,
  Menu as MenuIcon,
  Notifications as NotificationsIcon,
} from "@mui/icons-material";

import type { Building, Civilization, Technology, Unit } from "../types";
import { CivComparePage, CivDataPage, TechDataPage, BuildingDataPage, UnitDataPage } from "../pages";
import { BuildingContext, CivContext, TechContext, UnitContext } from "../contexts";
import { DARK_TAN_COLOR } from "../constants/colors";
import { AppBar, Drawer, DrawerToolsSection, DrawerDataTablesSection, DrawerLinksSection } from "./Layout";
import { Copyright } from "./Micro";

import "@fontsource/roboto/400.css"; // todo move to font export or something

let unitData: Unit[] = require("./../data/units.json");
let techData: Technology[] = require("./../data/techs.json");
let civData: Civilization[] = require("./../data/civs.json");
let buildingData: Building[] = require("./../data/buildings.json");

function DashboardContent() {
  const [open, setOpen] = useState(true);
  const [units, setUnits] = useState(unitData);
  const [civs, setCivs] = useState(civData);
  const [techs, setTechs] = useState(techData);
  const [buildings, setBuildings] = useState(buildingData);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <BuildingContext.Provider value={buildings}>
      <TechContext.Provider value={techs}>
        <CivContext.Provider value={civs}>
          <UnitContext.Provider value={units}>
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
                  {DrawerToolsSection}
                  <Divider sx={{ my: 1 }} />
                  {DrawerDataTablesSection}
                  <Divider sx={{ my: 1 }} />
                  {DrawerLinksSection}
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
                <Container maxWidth={false} sx={{ mt: 2, mb: 2, backgroundColor: DARK_TAN_COLOR }}>
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
          </UnitContext.Provider>
        </CivContext.Provider>
      </TechContext.Provider>
    </BuildingContext.Provider>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
