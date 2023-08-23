import * as React from "react";
import { useState } from "react";
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
import { Settings, type Building, type Civilization, type Technology, type Unit } from "../types";
import { CivComparePage, CivDataPage, TechDataPage, BuildingDataPage, UnitDataPage } from "../pages";
import { BuildingContext, CivContext, SettingsContext, TechContext, UnitContext } from "../contexts";
import { DARK_TAN_COLOR } from "../constants";
import { AppBar, Drawer, DrawerToolsSection, DrawerDataTablesSection, DrawerLinksSection } from "./Layout";
import { Copyright } from "./Micro";
import "@fontsource/roboto/400.css";

let unitData: Unit[] = require("./../data/units.json");
let techData: Technology[] = require("./../data/techs.json");
let civData: Civilization[] = require("./../data/civs.json");
let buildingData: Building[] = require("./../data/buildings.json");

const DEFAULT_SETTINGS: Settings = {
  showEliteUnits: false,
};

function DashboardContent() {
  const [open, setOpen] = useState(false);
  const [units] = useState(unitData);
  const [civs] = useState(civData);
  const [techs] = useState(techData);
  const [buildings] = useState(buildingData);
  const pathName = useLocation().pathname;
  const [settings, setSettings] = useState(DEFAULT_SETTINGS);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handleChange = () => {
    setSettings({ showEliteUnits: !settings.showEliteUnits });
  };

  return (
    <SettingsContext.Provider value={settings}>
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
                      AgeOfInfo {pathName === "/" ? " > Compare Civilizations" : null}
                    </Typography>
                    {pathName === "/" ? (
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={settings.showEliteUnits}
                            onChange={handleChange}
                            inputProps={{ "aria-label": "controlled" }}
                          />
                        }
                        label="Show Elite Units"
                      />
                    ) : null}

                    <IconButton color="inherit">
                      <Badge badgeContent={0} color="secondary">
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
    </SettingsContext.Provider>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
