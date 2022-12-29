import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import type { Civilization } from "../types";

let civs: Civilization[] = require("./../data/civs.json");

let dropdownOptions: string[] = [];
civs.map((civ) => {
  dropdownOptions.push(civ.name);
});

type AutoCompleteSelectProps = {
  setSelectedCiv: (civ?: Civilization) => void;
};

export default function AutoCompleteSelect(props: AutoCompleteSelectProps) {
  const [value, setValue] = React.useState<string | null>();
  const [inputValue, setInputValue] = React.useState("");

  return (
    <div>
      <Autocomplete
        value={value}
        onChange={(event: any, newValue: string | null) => {
          console.log(`newValue: ${newValue}`);
          const chosenCiv = civs.find((c) => newValue == c.name);
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
