import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useContext } from "react";
import { BuildingContext } from "../contexts";
import { LIGHT_TAN_COLOR } from "../constants/colors";

const columns: GridColDef[] = [
  {
    field: "name",
    headerName: "Name",
    width: 130,
  },
  {
    field: "age",
    headerName: "Age",
    width: 200,
  },
  {
    field: "build_time",
    headerName: "Build Time",
    width: 200,
  },
  {
    field: "hit_points",
    headerName: "Hit Points",
    width: 200,
  },
  {
    field: "armor",
    headerName: "Armor",
    width: 200,
  },
  {
    field: "line_of_sight",
    headerName: "Line of Sight",
    width: 200,
  },
  {
    field: "special",
    headerName: "Special",
    width: 200,
  },
];

export default function DataGridBuildings() {
  const buildings = useContext(BuildingContext);
  return (
    <Box sx={{ height: "90vh", width: "100%" }}>
      <DataGrid
        rows={buildings ?? ["None"]}
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
