import { Box } from "@mui/system";
import Button from "@mui/material/Button";
import DoneIcon from "@mui/icons-material/Done";
import Alert from "@mui/material/Alert";
import { useTypeForm } from "context/typeformContext";
import { SET_QUESTION_NO } from "reducer/constants";
import { useState, useEffect } from "react";
import { typeFormStructure } from "data/typeformStructure";
import { submitResponseToEmail } from "service/handler";

export const ButtonCantrol = ({ clickHandler, flag, questionNo }) => {
  const { typeFormState, typeFormDispatch } = useTypeForm();
  const [fillTextError, setFillTextError] = useState(false);
  const item = typeFormStructure[questionNo];
  const itemValue = typeFormState?.response[item?.questionType];

  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const phonenoRegex = /^\d{10}$/;
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

  const emailValidation = () => {
    if (itemValue !== "" && item?.questionType === "email") {
      if (itemValue?.match(emailRegex)) setEmailError(false);
      else setEmailError(true);
    }
  };

  const phoneValidation = () => {
    if (itemValue !== "" && item?.questionType === "phoneNO") {
      if (itemValue?.match(phonenoRegex)) setPhoneError(false);
      else setPhoneError(true);
    }
  };

  const nextQuestion = () => {
    if (itemValue === "") {
      setFillTextError(true);
      console.log("tes");
    } else {
      setFillTextError(false);
      flag && clickHandler();
      typeFormDispatch({ type: SET_QUESTION_NO });
    }
  };

  useEffect(() => {
    if (itemValue === "") setFillTextError(true);
    setFillTextError(false);

    emailValidation();
    phoneValidation();

    function handleKeypress(event) {
      if (event.key === "Enter") {
        event.preventDefault();
        nextQuestion();
      }
    }

    document.addEventListener("keypress", handleKeypress);

    return () => {
      document.removeEventListener("keypress", handleKeypress);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemValue]);

  const submitHandler = () => {
    nextQuestion();
    submitResponseToEmail(typeFormState?.response);
  };

  return (
    <Box
      sx={{
        display: "flex",
        gap: "1rem",
        alignItems: "center",
        marginTop: "2rem",
      }}
    >
      {fillTextError ? (
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
          Please Fill this in{" "}
        </Alert>
      ) : emailError ? (
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
          Hmm... that email doesn't look right
        </Alert>
      ) : phoneError ? (
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
          Hmm... that phone number doesn't look right
        </Alert>
      ) : (
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
