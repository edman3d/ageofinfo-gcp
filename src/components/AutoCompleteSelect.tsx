import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import type { Civilization } from "../types";

import { useContext, useState } from "react";
import { CivContext } from "../contexts/CivContext";

// let civs: Civilization[] = require("./../data/civs.json");

type AutoCompleteSelectProps = {
  setSelectedCiv: (civ?: Civilization) => void;
};

function getCivDropdownValues(civs: Civilization[] | null) {
  let dropdownOptions: string[] = [];
  civs?.map((civ) => {
    dropdownOptions.push(civ.name);
  });
  return dropdownOptions;
}

export default function AutoCompleteSelect(props: AutoCompleteSelectProps) {
  const [value, setValue] = React.useState<string | null>();
  const [inputValue, setInputValue] = React.useState("");
  const civs = useContext(CivContext);

  const dropdownOptions = getCivDropdownValues(civs);

  return (
    <div>
      <Autocomplete
        value={value}
        onChange={(event: any, newValue: string | null) => {
          console.log(`newValue: ${newValue}`);
          const chosenCiv = civs?.find((c) => newValue === c.name);
          setValue(newValue);
          props.setSelectedCiv(chosenCiv);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          console.log(`newInputValue: ${newInputValue}`);
          setInputValue(newInputValue);
        }}
        id="controllable-states-demo"
        options={dropdownOptions}
        sx={{ width: "100%", marginBottom: 1 }}
        renderInput={(params) => <TextField {...params} label="Select a Civilization" />}
      />
    </div>
  );
}
