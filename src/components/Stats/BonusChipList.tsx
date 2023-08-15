import * as React from "react";
import { Chip, Stack, Typography } from "@mui/material";
import { CombatBonus } from "../../types";

type ChipListProps = {
  bonuses?: CombatBonus[];
};

export function BonusChipList(props: ChipListProps) {
  const bonusesArray = props.bonuses ? JSON.parse(props.bonuses.toString()) : [];
  return (
    <Stack spacing={0.5} marginBottom={1}>
      {bonusesArray.length > 0 ? (
        bonusesArray.map((item: CombatBonus, index: number) => (
          <div style={{ display: "inline-flex", padding: "2px", alignItems: "center" }} key={index}>
            <Typography sx={{ minWidth: "28px", marginRight: 0.5 }} variant="subtitle1">
              +{item.amount}
            </Typography>
            <Chip key={index} label={item.against} size="medium" sx={{ maxWidth: "fit-content", fontSize: "1rem" }} />
          </div>
        ))
      ) : (
        <Chip label="None" size="medium" sx={{ maxWidth: "fit-content", fontSize: "1rem" }} />
      )}
    </Stack>
  );
}
