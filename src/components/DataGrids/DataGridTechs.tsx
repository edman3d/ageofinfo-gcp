import * as React from "react";
import { Box, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useContext } from "react";
import { TechContext } from "../../contexts";
import { LIGHT_TAN_COLOR } from "../../constants/colors";

const columns: GridColDef[] = [
  {
    field: "name",
    headerName: "Name",
    width: 200,
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
    field: "applies_to",
    headerName: "Applies To",
    width: 220,
  },
  {
    field: "description",
    headerName: "Description",
    width: 600,
  },
];

export default function DataGridTechs() {
  const techs = useContext(TechContext);
  return (
    <Box sx={{ height: "85vh", width: "100%" }}>
      <Typography variant="h5" color="black" sx={{ marginBottom: 2 }}>
        Raw Technology Data
      </Typography>
      <DataGrid
        rows={techs ?? ["None"]}
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
