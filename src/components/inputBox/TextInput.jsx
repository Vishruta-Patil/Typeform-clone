import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

export const TextInput = () => {
    const CssTextField = styled(TextField)({
        "& label.Mui-focused": {
          color: "white",
        },
        "& .MuiInput-underline:before": {
          borderBottomColor: "gray",
        },
      });
    return (
        <CssTextField
          sx={{ input: { color: "white", fontSize: "2rem" } }}
          variant="standard"
          fullWidth
          placeholder="Type your answers here..."
          InputLabelProps={{
            style: {
              color: "#4D4D4D",
              fontSize: "2rem",
              fontWeight: "bold",
            },
          }}
        />
    )
}