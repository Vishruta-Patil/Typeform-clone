import { TextField } from "@mui/material";
import { useTypeForm } from "context/typeformContext";
import { SET_RESPONSE } from "reducer/constants";

export const TextInput = ({ questionType }) => {
  const { typeFormDispatch, typeFormState } = useTypeForm();

  return (
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
      value={typeFormState.response[questionType]}
      onChange={(e) => {typeFormDispatch({type: SET_RESPONSE, payload: {query: questionType, ans: e.target.value}})}}
    />
  );
};
