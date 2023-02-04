import * as React from "react";
import TextField from "@mui/material/TextField";
import { Autocomplete, Box } from "@mui/material";
import type { Civilization } from "../types";

import { useContext, useState } from "react";
import { CivContext } from "../contexts/CivContext";

import { LIGHT_TAN_COLOR, MEDIUM_TAN_COLOR, DARK_TAN_COLOR } from "../constants/colors";

// image={require(`../../images/buildings/${building.image}.png`)}

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
        value={value || null}
        onChange={(event: any, newValue: string | null) => {
          // console.log(`newValue: ${newValue}`);
          const chosenCiv = civs?.find((c) => newValue === c.name);
          setValue(newValue);
          props.setSelectedCiv(chosenCiv);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          // console.log(`newInputValue: ${newInputValue}`);
          setInputValue(newInputValue);
        }}
        id="civ-autocomplete-select"
        options={dropdownOptions}
        sx={{ width: "100%", marginBottom: 1 }}
        renderInput={(params) => <TextField {...params} label="Select a Civilization" />}
        renderOption={(props, option) => (
          <Box component="li" sx={{ "& > img": { mr: 2, flexShrink: 0 } }} {...props}>
            <img
              loading="lazy"
              width="20"
              src={require(`../images/civilizations/${option.toLowerCase()}.png`)}
              // src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
              // srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
              alt=""
            />
            <span>{option}</span>
            {/* {option.label} ({option.code}) */}
          </Box>
        )}
      />
    </div>
  );
}
