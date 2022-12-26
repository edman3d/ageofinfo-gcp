import * as React from "react";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "./Title";
import type { Civilization, Technology, Unit } from "../types";
let civs: Civilization[] = require("./../data/civs.json");
console.log(`Found ${civs.length} civs`);

// Generate Order Data
// function createData(id: number, date: string, name: string, shipTo: string, paymentMethod: string, amount: number) {
//   return { id, date, name, shipTo, paymentMethod, amount };
// }

// const rows = [
//   createData(0, "16 Mar, 2019", "Elvis Presley", "Tupelo, MS", "VISA ⠀•••• 3719", 312.44),
//   createData(1, "16 Mar, 2019", "Paul McCartney", "London, UK", "VISA ⠀•••• 2574", 866.99),
//   createData(2, "16 Mar, 2019", "Tom Scholz", "Boston, MA", "MC ⠀•••• 1253", 100.81),
//   createData(3, "16 Mar, 2019", "Michael Jackson", "Gary, IN", "AMEX ⠀•••• 2000", 654.39),
//   createData(4, "15 Mar, 2019", "Bruce Springsteen", "Long Branch, NJ", "VISA ⠀•••• 5919", 212.79),
// ];

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

export default function Orders() {
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
          {civs.map((civ) => (
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
