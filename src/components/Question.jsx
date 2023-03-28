import { Box } from "@mui/system";
import { TextInput } from "./inputBox/TextInput";
import { AutocompleteInput } from "./inputBox/AutoCompleteInput";
import { typeFormStructure } from "data/typeformStructure";
import { FormCheckBox } from "./inputBox/FormCheckbox";
import { ButtonCantrol } from "./ButtonCantrol";

export const Question = ({ questionNo }) => {
  const item = typeFormStructure[questionNo];

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
        <p style={{ fontSize: "2.5rem" }}>
          {item?.no} {item?.question}
        </p>
        <p style={{ fontSize: "2rem", color: "gray" }}>{item?.intro}</p>
        {item?.type === "intro" && (
          <div style={{ fontSize: "2rem", color: "gray" }}>
            You will spend <br />
            - 6 hours/week for the first 5 weeks <br />- 15 hours/week for the
            last 3 weeks
          </div>
        )}
        {item?.type === "text" && (
          <TextInput questionType={item?.questionType} />
        )}
        {item?.type === "autocomplete" && <AutocompleteInput />}
        {item?.type === "option" && (
          <FormCheckBox
            questionNo={questionNo}
            optionCount={item?.optionCount}
          />
        )}
      </Box>
      {item?.type !== "option" && <ButtonCantrol questionNo={questionNo}/>}
    </Box>
  );
};
