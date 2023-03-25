import * as React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { industriesData } from "data/industriesData";
import { styled } from "@mui/material/styles";
import { Paper } from "@mui/material";

export default function Sizes() {
  const CssTextField = styled(TextField)({
    "& label.Mui-focused": {
      color: "white",
    },
    "& .MuiInput-underline:before": {
      borderBottomColor: "gray",
    },
  });

  return (
    <Autocomplete
      size="small"
      options={industriesData}
      getOptionLabel={(option) => option}
      renderInput={(params) => (
        <CssTextField
          {...params}
          sx={{ input: { color: "white", fontSize: "2.5rem" } }}
          variant="standard"
          placeholder="Type or Select an option"
        />
      )}
      PaperComponent={({ children }) => (
        <Paper style={{ background: "black", color:"white", fontSize:"2rem" }}>{children}</Paper>
      )}
    />
  );
}
