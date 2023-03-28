import { Box } from "@mui/system";
import Button from "@mui/material/Button";
import DoneIcon from "@mui/icons-material/Done";
import { useTypeForm } from "context/typeformContext";
import { SET_QUESTION_NO } from "reducer/constants";

export const ButtonCantrol = ({clickHandler, flag, questionNo}) => {
    const { typeFormDispatch } = useTypeForm();
    const nextQuestion = () => {
        flag && clickHandler();
        typeFormDispatch({ type: SET_QUESTION_NO });
      };

      console.log(questionNo)

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
          {questionNo === 0 ? "I agree" :  questionNo === 7 ? "Submit" : "OK"}
        </Button>
        <p>
          press <span style={{ fontWeight: "bold" }}>Enter</span>
        </p>
      </Box>
    )
}