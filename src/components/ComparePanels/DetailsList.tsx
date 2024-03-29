import * as React from "react";
import { Typography } from "@mui/material";

type DetailsListProps = {
  delimitedString: string;
};

export default function DetailsList(props: DetailsListProps) {
  const listItems = props.delimitedString.trim().split(";");
  let hasABonus = props.delimitedString.length > 0 && listItems.length > 0;

  return (
    <ul style={{ marginTop: "0px", paddingLeft: "20px", fontWeight: "normal" }}>
      {hasABonus ? (
        listItems.map((item, index) => (
          <li key={index}>
            <Typography variant="subtitle1"> {item} </Typography>{" "}
          </li>
        ))
      ) : (
        <li>None</li>
      )}
    </ul>
  );
}
