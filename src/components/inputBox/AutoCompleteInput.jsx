import * as React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { industriesData } from "data/industriesData";
import { Paper } from "@mui/material";
import { useTypeForm } from "context/typeformContext";
import { SET_RESPONSE } from "reducer/constants";

export const AutocompleteInput = () => {
  const { typeFormDispatch, typeFormState } = useTypeForm();

  return (
    <Autocomplete
      size="small"
      options={industriesData}
      getOptionLabel={(option) => option}
      onChange={(event, value) => {
        typeFormDispatch({
          type: SET_RESPONSE,
          payload: { query: "industry", ans: value },
        });
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          sx={{ input: { color: "white", fontSize: "2.5rem" } }}
          variant="standard"
          placeholder="Type or Select an option"
          value={typeFormState.response.industry}
          
        />
      )}
      PaperComponent={({ children }) => (
        <Paper
          style={{ background: "black", color: "white", fontSize: "2rem" }}
        >
          {children}
        </Paper>
      )}
    />
  );
};
