import { Box } from "@mui/system";
import Button from "@mui/material/Button";
import DoneIcon from "@mui/icons-material/Done";
import Alert from "@mui/material/Alert";
import { useTypeForm } from "context/typeformContext";
import { SET_ERROR_MSG, SET_QUESTION_NO } from "reducer/constants";
import {  useEffect } from "react";
import { typeFormStructure } from "data/typeformStructure";

export const ButtonCantrol = ({ clickHandler, flag, questionNo, isAutoComplete, ans }) => {
  const { typeFormState, typeFormDispatch } = useTypeForm();

  const item = typeFormStructure[questionNo];
  const itemValue = typeFormState?.response[item?.questionType];
  const autocompleteValue = typeFormState?.response["industry"]

  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const phoneNoRegex = /^\d{10}$/;

  const nextQuestion = () => {
    if(isAutoComplete) {
      if(autocompleteValue !== "") {
        typeFormDispatch({ type: SET_ERROR_MSG, payload: "" });
        typeFormDispatch({ type: SET_QUESTION_NO });
      } else 
        typeFormDispatch({ type: SET_ERROR_MSG, payload: "Oops! Please make a selection" });
    }
    else if (itemValue === "")
      typeFormDispatch({ type: SET_ERROR_MSG, payload: "Please Fill this in" });
    else if (item?.questionType === "email" && !itemValue?.match(emailRegex))
      typeFormDispatch({
        type: SET_ERROR_MSG,
        payload: "Hmm... that email doesn't look right",
      });
    else if (
      item?.questionType === "phoneNO" &&
      !itemValue?.match(phoneNoRegex)
    )
      typeFormDispatch({
        type: SET_ERROR_MSG,
        payload: "Hmm... that phone number doesn't look right",
      });
    else {
      if (typeFormState.errorMessage === "") {
        flag && clickHandler();
        typeFormDispatch({ type: SET_QUESTION_NO });
      }
    }
  };

  useEffect(() => {
     function handleKeypress(event) {
      if (event.key === "Enter") {
        event.preventDefault();
        nextQuestion()
      }
    }
    document.addEventListener("keypress", handleKeypress);

    return () => {
      document.removeEventListener("keypress", handleKeypress);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemValue, autocompleteValue]);

  return (
    <Box
      sx={{
        display: "flex",
        gap: "1rem",
        alignItems: "center",
        marginTop: "2rem",
      }}
    >
      {item?.no !== "" && typeFormState.errorMessage !== "" && (
        <Alert
          sx={{
            fontSize: "1.2rem",
            color: "#BF0404",
            display: "flex",
            alignItems: "center",
            padding: "0px 16px",
          }}
          severity="error"
        >
          {typeFormState.errorMessage}
        </Alert>
      )}

      {(item?.no === "" || typeFormState.errorMessage === "") && (
        <Box>
          <Button
            sx={{ background: "#0077FF", fontSize: "1.5rem" }}
            variant="contained"
            endIcon={<DoneIcon />}
            onClick={nextQuestion}
          >
            {questionNo === 0 ? "I agree" : questionNo === 7 ? "Submit" : "OK"}
          </Button>

          <p>
            press <span style={{ fontWeight: "bold" }}>Enter</span>
          </p>
        </Box>
      )}
    </Box>
  );
};
