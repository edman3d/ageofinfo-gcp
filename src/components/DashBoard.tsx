import * as React from "react";
import { useContext, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import {
  Badge,
  Box,
  Checkbox,
  Container,
  CssBaseline,
  Divider,
  FormControlLabel,
  List,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import {
  ChevronLeft as ChevronLeftIcon,
  Menu as MenuIcon,
  Notifications as NotificationsIcon,
} from "@mui/icons-material";
import { type Building, type Civilization, type Technology, type Unit } from "../types";
import { CivComparePage, CivDataPage, TechDataPage, BuildingDataPage, UnitDataPage } from "../pages";
import { BuildingContext, CivContext, SettingsContext, TechContext, UnitContext } from "../contexts";
import { DARK_TAN_COLOR } from "../constants";
import { AppBar, Drawer, DrawerToolsSection, DrawerDataTablesSection, DrawerLinksSection } from "./Layout";
import { Copyright } from "./Micro";
import "@fontsource/roboto/400.css";
import DataIndex from "./DataGrids/DataIndex";
let unitData: Unit[] = require("./../data/units.json");
let techData: Technology[] = require("./../data/techs.json");
let civData: Civilization[] = require("./../data/civs.json");
let buildingData: Building[] = require("./../data/buildings.json");

function DashboardContent() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [units] = useState(unitData);
  const [civs] = useState(civData);
  const [techs] = useState(techData);
  const [buildings] = useState(buildingData);
  const pathName = useLocation().pathname;
  const { showEliteUnits, toggleShowEliteUnits } = useContext(SettingsContext);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <BuildingContext.Provider value={buildings}>
      <TechContext.Provider value={techs}>
        <CivContext.Provider value={civs}>
          <UnitContext.Provider value={units}>
            <Box sx={{ display: "flex" }}>
              <CssBaseline />

              <AppBar position="absolute" open={drawerOpen}>
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
                      ...(drawerOpen && { display: "none" }),
                    }}
                  >
                    <MenuIcon sx={{ color: DARK_TAN_COLOR }} />
                  </IconButton>
                  <Typography component="h1" variant="h6" color="black" noWrap sx={{ flexGrow: 1 }}>
                    AgeOfInfo {pathName === "/" ? " > Compare Civilizations" : null}
                  </Typography>
                  {pathName === "/" ? (
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={showEliteUnits}
                          onChange={toggleShowEliteUnits}
                          inputProps={{ "aria-label": "controlled" }}
                        />
                      }
                      label={
                        <Typography sx={{ color: "black", marginRight: 2, userSelect: "none" }} variant="body1">
                          Show Elite Units
                        </Typography>
                      }
                    />
                  ) : null}

                  <IconButton color="inherit">
                    <Badge badgeContent={0} color="secondary">
                      <NotificationsIcon />
                    </Badge>
                  </IconButton>
                </Toolbar>
              </AppBar>

              <Drawer variant="permanent" open={drawerOpen}>
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
                    <Route path="data" element={<DataIndex />}>
                      <Route path="civs" element={<CivDataPage />} />
                      <Route path="units" element={<UnitDataPage />} />
                      <Route path="techs" element={<TechDataPage />} />
                      <Route path="buildings" element={<BuildingDataPage />} />
                    </Route>
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
