import * as React from "react";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "./Title";
import { useContext } from "react";
import { CivContext } from "../contexts/CivContext";

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

export default function Orders() {
  const civs = useContext(CivContext);
  return (
    <React.Fragment>
      <Title>Civilization Details</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: "bold" }}>Name</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Army Type</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Unique Unit</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Unique Tech</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {civs?.map((civ) => (
            <TableRow key={civ.name}>
              <TableCell>{civ.name}</TableCell>
              <TableCell>{civ.army_type}</TableCell>
              <TableCell>{civ.unique_unit}</TableCell>
              <TableCell>{civ.unique_tech}</TableCell>
              {/* <TableCell align="right">{civ.unique_tech}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link>
    </React.Fragment>
  );
}
