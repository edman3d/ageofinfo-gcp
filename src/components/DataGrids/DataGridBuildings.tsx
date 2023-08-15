import * as React from "react";
import { Box, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useContext } from "react";
import { BuildingContext } from "../../contexts";
import { LIGHT_TAN_COLOR } from "../../constants";

const columns: GridColDef[] = [
  {
    field: "name",
    headerName: "Name",
    width: 180,
  },
  {
    field: "age",
    headerName: "Age",
    width: 120,
  },
  {
    field: "build_time",
    headerName: "Build Time",
    width: 120,
  },
  {
    field: "hit_points",
    headerName: "Hit Points",
    width: 120,
  },
  {
    field: "armor",
    headerName: "Armor",
    width: 120,
  },
  {
    field: "line_of_sight",
    headerName: "Line of Sight",
    width: 120,
  },
  {
    field: "special",
    headerName: "Special",
    width: 900,
  },
];

export default function DataGridBuildings() {
  const buildings = useContext(BuildingContext);
  return (
    <Box sx={{ height: "85vh", width: "100%" }}>
      <Typography variant="h5" color="black" sx={{ marginBottom: 2 }}>
        Raw Building Data
      </Typography>
      <DataGrid
        rows={buildings ?? ["None"]}
        columns={columns}
        pageSize={25}
        rowsPerPageOptions={[25]}
        // checkboxSelection
        disableSelectionOnClick
        // experimentalFeatures={{ newEditingApi: true }}
        sx={{ backgroundColor: LIGHT_TAN_COLOR }}
      />
    </Box>
  );
}
