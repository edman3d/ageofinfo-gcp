import * as React from "react";
import { Chip, Stack } from "@mui/material";

type ChipListProps = {
  delimitedString: string;
};

export function ChipList(props: ChipListProps) {
  const listItems = props.delimitedString.trim().split(";");
  let hasAtLeastOneValue = props.delimitedString.length > 0 && listItems.length > 0;

  return (
    <Stack spacing={0.5} marginBottom={1}>
      {hasAtLeastOneValue ? (
        listItems.map((item, index) => (
          <Chip key={index} label={item} size="medium" sx={{ maxWidth: "fit-content", fontSize: "1rem" }} />
        ))
      ) : (
        <Chip label="None" size="medium" sx={{ maxWidth: "fit-content", fontSize: "1rem" }} />
      )}
    </Stack>
  );
}
