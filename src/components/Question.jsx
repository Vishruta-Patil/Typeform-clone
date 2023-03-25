import { Box } from "@mui/system";
import Button from "@mui/material/Button";
import DoneIcon from "@mui/icons-material/Done";
import { TextInput } from "./inputBox/TextInput";

export const Question = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        padding: "1rem",
        width: "750px",
        maxWidth: "1000px",
      }}
    >
      <Box sx={{ fontSize: "2rem" }}>
        <p style={{ fontSize: "2.5rem" }}>1. What's your first name?*</p>
        <TextInput />
      </Box>

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
        >
          OK
        </Button>
        <p>
          press <span style={{ fontWeight: "bold" }}>Enter</span>
        </p>
      </Box>
    </Box>
  );
};
