import * as React from "react";
import { Chip, Stack } from "@mui/material";

type ChipListProps = {
  delimitedString: string;
};

function ChipList(props: ChipListProps) {
  const listItems: string[] = props.delimitedString.trim().split(";");
  const hasAtLeastOneValue: boolean = props.delimitedString.length > 0 && listItems.length > 0;

  return (
    <Stack spacing={0.5} marginBottom={1}>
      {hasAtLeastOneValue ? (
        listItems.map((item: string, index: number) => (
          <Chip key={index} label={item} size="medium" sx={{ maxWidth: "fit-content", fontSize: "1rem" }} />
        ))
      ) : (
        <Chip label="None" size="medium" sx={{ maxWidth: "fit-content", fontSize: "1rem" }} />
      )}
    </Stack>
  );
}

export default React.memo(ChipList);
