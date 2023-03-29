import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import { ButtonCantrol } from "components/ButtonCantrol";
import SearchCountry from "components/SearchCountry";
import { useTypeForm } from "context/typeformContext";
import { SET_RESPONSE } from "reducer/constants";

export const TextInput = ({ item, questionNo }) => {
  const { typeFormDispatch, typeFormState } = useTypeForm();

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box sx={{ display: "flex", alignItems: "end" }}>
        {item?.questionType === "phoneNO" && <SearchCountry />}
        <TextField
          variant="standard"
          fullWidth
          placeholder="Type your answers here..."
          sx={{
            "& & label.Mui-focused": { color: "white" },
            "& .MuiInput-underline:before": { borderBottomColor: "gray" },
            "& .MuiInput-underline:after": { borderBottomColor: "gray" },
            input: { color: "white", fontSize: "2.5rem" },
          }}
          value={typeFormState.response[item?.questionType]}
          onChange={(e) => {
            typeFormDispatch({
              type: SET_RESPONSE,
              payload: { query: item?.questionType, ans: e.target.value },
            });
          }}
          type={item?.questionType === "phoneNO" ? "number" : "text"}
        />
      </Box>
      <ButtonCantrol questionNo={questionNo} />
    </Box>
  );
};
