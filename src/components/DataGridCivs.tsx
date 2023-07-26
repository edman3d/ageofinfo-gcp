import * as React from "react";
import { Box, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useContext } from "react";
import { CivContext } from "../contexts/CivContext";
import { LIGHT_TAN_COLOR } from "../constants/colors";

const columns: GridColDef[] = [
  {
    field: "name",
    headerName: "Name",
    width: 130,
  },
  {
    field: "army_type",
    headerName: "Army Type",
    width: 220,
  },
  {
    field: "unique_unit",
    headerName: "Unique Unit/s",
    width: 230,
  },
  {
    field: "unique_tech",
    headerName: "Unique Tech",
    width: 200,
  },
  {
    field: "team_bonus",
    headerName: "Team Bonus",
    width: 200,
  },
  {
    field: "civilization_bonus",
    headerName: "Civ Bonus",
    width: 400,
  },
];

export default function DataGridCivs() {
  const civs = useContext(CivContext);
  return (
    <Box sx={{ height: "85vh", width: "100%" }}>
      <Typography variant="h5" color="black" sx={{ marginBottom: 2 }}>
        Raw Civilization Data
      </Typography>
      <DataGrid
        rows={civs ?? ["None"]}
        columns={columns}
        pageSize={25}
        rowsPerPageOptions={[25]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
        sx={{ backgroundColor: LIGHT_TAN_COLOR }}
      />
    </Box>
  );
}
