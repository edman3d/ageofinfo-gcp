import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useContext } from "react";
import { UnitContext } from "../contexts";
import { LIGHT_TAN_COLOR } from "../constants/colors";

const columns: GridColDef[] = [
  {
    field: "name",
    headerName: "Name",
    width: 210,
  },
  {
    field: "hit_points",
    headerName: "Hit Points",
    width: 100,
  },
  {
    field: "attack",
    headerName: "Attack",
    width: 100,
  },
  {
    field: "armor",
    headerName: "Armor",
    width: 100,
  },
  {
    field: "range",
    headerName: "Range",
    width: 100,
  },
  {
    field: "movement_rate",
    headerName: "Movespeed",
    width: 150,
  },
  {
    field: "accuracy",
    headerName: "Accuracy",
    width: 100,
  },
  {
    field: "armor_class",
    headerName: "Armor Class",
    width: 500,
  },
];

export default function DataGridUnits() {
  const units = useContext(UnitContext);
  return (
    <Box sx={{ height: "90vh", width: "100%" }}>
      <DataGrid
        rows={units ?? ["None"]}
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
