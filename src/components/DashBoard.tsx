import * as React from "react";
import { useContext, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "@fontsource/roboto/400.css";
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
import { CivComparePage, CivDataPage, TechDataPage, BuildingDataPage, UnitDataPage } from "../pages";
import { SettingsContext } from "../contexts";
import { DARK_TAN_COLOR } from "../constants";
import { AppBar, Drawer, DrawerToolsSection, DrawerDataTablesSection, DrawerLinksSection } from "./Layout";
import { Copyright } from "./Micro";
import { BuildingDataIndex, CivDataIndex, DataIndex, TechDataIndex, UnitDataIndex } from "./DataGrids";

function DashboardContent() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const pathName = useLocation().pathname;
  const { showEliteUnits, toggleShowEliteUnits } = useContext(SettingsContext);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
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
              <Route path="civs" element={<CivDataIndex />}>
                <Route index element={<CivDataPage />} />
                <Route path="edit" element={<p>TODO: EDIT CIV FORM</p>} />
              </Route>

              <Route path="units" element={<UnitDataIndex />}>
                <Route index element={<UnitDataPage />} />
                <Route path="edit" element={<p>TODO: EDIT UNIT FORM</p>} />
              </Route>

              <Route path="techs" element={<TechDataIndex />}>
                <Route index element={<TechDataPage />} />
                <Route path="edit" element={<p>TODO: EDIT TECH FORM</p>} />
              </Route>

              <Route path="buildings" element={<BuildingDataIndex />}>
                <Route index element={<BuildingDataPage />} />
                <Route path="edit" element={<p>TODO: EDIT BUILDING FORM</p>} />
              </Route>
            </Route>
          </Routes>
          <Copyright sx={{ pt: 4 }} />
        </Container>
      </Box>
    </Box>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
