import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { useTypeForm } from "context/typeformContext";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));

export const ProgressBar = () => {
  const { typeFormState } = useTypeForm();
  const [progressValue, setProgressValue] = React.useState(
    (100 * typeFormState.questionNo) / 7
  );

  React.useEffect(() => {
    setProgressValue((100 * typeFormState.questionNo) / 7)
  }, [typeFormState.questionNo])
  
  return (
    <Box>
      <BorderLinearProgress variant="determinate" value={progressValue} />
    </Box>
  );
};

