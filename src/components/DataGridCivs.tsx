import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import type { Civilization } from "../types";

let civs: Civilization[] = require("./../data/civs.json");

const columns: GridColDef[] = [
  {
    field: "name",
    headerName: "Name",
    width: 90,
  },
  {
    field: "army_type",
    headerName: "Army Type",
    width: 160,
  },
  {
    field: "unique_unit",
    headerName: "Unique Unit",
    width: 160,
  },
  {
    field: "unique_tech",
    headerName: "Unique Tech",
    width: 160,
  },
  {
    field: "team_bonus",
    headerName: "Team Bonus",
    width: 160,
  },
  {
    field: "civilization_bonus",
    headerName: "Civ Bonus",
    width: 300,
  },
];

export default function DataGridCivs() {
  return (
    <Box sx={{ height: 900, width: "100%" }}>
      <DataGrid
        rows={civs}
        columns={columns}
        pageSize={25}
        rowsPerPageOptions={[25]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
}