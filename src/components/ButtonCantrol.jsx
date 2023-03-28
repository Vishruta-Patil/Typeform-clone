import { Box } from "@mui/system";
import Button from "@mui/material/Button";
import DoneIcon from "@mui/icons-material/Done";
import { useTypeForm } from "context/typeformContext";
import { SET_QUESTION_NO } from "reducer/constants";
import { useEffect } from "react";

export const ButtonCantrol = ({ clickHandler, flag, questionNo }) => {
  const { typeFormDispatch } = useTypeForm();
  const nextQuestion = () => {
    flag && clickHandler();
    typeFormDispatch({ type: SET_QUESTION_NO });
  };

  useEffect(() => {
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
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        gap: "1rem",
        alignItems: "center",
        marginTop: "2rem",
      }}
    >
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
  );
};
