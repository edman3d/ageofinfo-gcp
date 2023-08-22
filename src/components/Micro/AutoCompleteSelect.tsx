import * as React from "react";
import TextField from "@mui/material/TextField";
import { Autocomplete, Box } from "@mui/material";
import { useState } from "react";

type AutoCompleteSelectProps = {
  options: string[];
  selectCiv: (civName: string) => void;
};

export function AutoCompleteSelect(props: AutoCompleteSelectProps) {
  const [value, setValue] = useState<string | null>();
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <Autocomplete
        value={value || null}
        onChange={(event: any, newValue: string | null) => {
          setValue(newValue);
          props.selectCiv(newValue || "");
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="civ-autocomplete-select"
        options={props.options}
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

export default React.memo(AutoCompleteSelect);
