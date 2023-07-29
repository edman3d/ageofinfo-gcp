import * as React from "react";
import TextField from "@mui/material/TextField";
import { Autocomplete, Box } from "@mui/material";
import type { Civilization } from "../../types";
import { useContext } from "react";
import { CivContext } from "../../contexts/CivContext";

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

export function AutoCompleteSelect(props: AutoCompleteSelectProps) {
  const [value, setValue] = React.useState<string | null>();
  const [inputValue, setInputValue] = React.useState("");
  const civs = useContext(CivContext);

  const dropdownOptions = getCivDropdownValues(civs);

  return (
    <div>
      <Autocomplete
        value={value || null}
        onChange={(event: any, newValue: string | null) => {
          const chosenCiv = civs?.find((c) => newValue === c.name);
          setValue(newValue);
          props.setSelectedCiv(chosenCiv);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
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
              src={require(`../../images/civilizations/${option.toLowerCase()}.png`)}
              alt=""
            />
            <span>{option}</span>
          </Box>
        )}
      />
    </div>
  );
}
