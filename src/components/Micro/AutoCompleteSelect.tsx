import * as React from "react";
import TextField from "@mui/material/TextField";
import { Autocomplete, Box } from "@mui/material";
import type { Civilization } from "../../types";
import { useContext, useState } from "react";
import { CivContext } from "../../contexts/CivContext";

type AutoCompleteSelectProps = {
  options: string[];
  setSelectedCiv: (civ?: Civilization) => void;
};

export function AutoCompleteSelect(props: AutoCompleteSelectProps) {
  console.log("AutoCompleteSelect");
  const [value, setValue] = useState<string | null>();
  const [inputValue, setInputValue] = useState("");
  const civs = useContext(CivContext);

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
