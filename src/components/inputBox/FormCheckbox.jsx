import * as React from "react";
import Box from "@mui/material/Box";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import Checkbox from "@mui/material/Checkbox";
import { typeFormStructure } from "data/typeformStructure";
import { useTypeForm } from "context/typeformContext";
import {
  REMOVE_GOAL,
  REMOVE_ROLE,
  SET_ERROR_MSG,
  SET_GOALS,
  SET_ROLE,
} from "reducer/constants";
import { ButtonCantrol } from "components/ButtonCantrol";

export const FormCheckBox = ({ questionNo, optionCount }) => {
  const { typeFormState, typeFormDispatch } = useTypeForm();

  let data = typeFormStructure[questionNo].options;
  if (
    optionCount === 2 &&
    typeFormState.response.role.includes("Founder or CXO")
  )
    data = typeFormStructure[questionNo].optionForFounder;

  const objectData = Object.assign(...data.map((k) => ({ [k]: false })));
  const [state, setState] = React.useState(objectData);

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
    typeFormDispatch({
      type: SET_ERROR_MSG,
      payload: "",
    });
  };

  var objectValArray = Object.keys(state).map(function (key) {
    return state[key];
  });

  const error = objectValArray.filter((v) => v).length !== optionCount;

  const handleGoal = (item) => {
    if (typeFormState.response.goal.includes(item)) {
      typeFormDispatch({ type: REMOVE_GOAL, payload: item });
    } else {
      typeFormDispatch({ type: SET_GOALS, payload: item });
    }
  };

  const handleRole = (item) => {
    console.log(item);
    if (typeFormState.response.role.includes(item)) {
      typeFormDispatch({ type: REMOVE_ROLE, payload: item });
    } else {
      typeFormDispatch({ type: SET_ROLE, payload: item });
    }
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <FormControl
        required
        error={error}
        component="fieldset"
        sx={{
          width: "100%",
          maxWidth: 360,
          bgcolor: "black",
          fontSize: "2rem",
          color: "white",
        }}
        variant="standard"
      >
        <FormLabel
          component="legend"
          sx={{ color: "white", fontSize: "1.5rem" }}
        >{`Pick ${optionCount === 2 ? "two" : "one"}`}</FormLabel>
        <FormGroup>
          {data?.map((item, index) => (
            <FormControlLabel
              sx={{
                background: "#1A1A1A",
                margin: "5px",
                border: "1px solid white",
                borderRadius: "3px",
              }}
              control={
                <Checkbox
                  checked={objectValArray[index]}
                  onChange={handleChange}
                  name={item}
                  sx={{
                    "& .MuiSvgIcon-root": { fontSize: 28 },
                    color: "white",
                  }}
                  onClick={() =>
                    optionCount !== 1 ? handleGoal(item) : handleRole(item)
                  }
                />
              }
              label={item}
              key={index}
            />
          ))}
        </FormGroup>
        {error ? (
          <FormHelperText sx={{ fontSize: "1.5rem" }}>
            Select {optionCount === 2 ? 2 : 1} option
          </FormHelperText>
        ) : (
          <ButtonCantrol />
        )}
      </FormControl>
    </Box>
  );
};
