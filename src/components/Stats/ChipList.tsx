import * as React from "react";
import { Chip, Stack } from "@mui/material";

/**
 * e.g. Army Type - `'Elephants;Ships'`
 *
 * e.g. Armor Class - `'Infantry;Unique Unit'`
 */
type ChipListProps = {
  delimitedString: string;
};

/**
 * Renders one or more `<Chip/>` components. Creates 1 `<Chip/>` per delimited string.
 * @param props
 * @returns a `<Stack/>` of `<Chip/>` components
 */
export function ChipList(props: ChipListProps) {
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
