import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import { countriesData } from "data/countriesData";
import { ExpandMore } from "@mui/icons-material";
import { useTypeForm } from "context/typeformContext";
import { SET_RESPONSE } from "reducer/constants";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "425px",
  bgcolor: "black",
  color: "white",
  border: "3px solid white",
  boxShadow: 24,
  p: 1,
  pr: 0,
  borderRadius: "7px",
};

const Flag = ({ code }) => {
  console.log(code);
  return (
    <img
      loading="lazy"
      src={`https://flagcdn.com/28x21/${code?.toLowerCase()}.png`}
      srcset={`https://flagcdn.com/56x42/${code?.toLowerCase()}.png 2x`}
      width="28"
      height="21"
      alt="flag"
    />
  );
};

export default function SearchCountry() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [data, setData] = React.useState(countriesData);
  const [val, setVal] = React.useState({
    name: "India",
    code: "IN",
    phone: 91,
  });
  const { typeFormDispatch } = useTypeForm();


  return (
    <div>
      <Button
        endIcon={<ExpandMore />}
        onClick={handleOpen}
        sx={{ borderBottom: "1px solid gray", color: "white",
        "&:focus, &:hover": {
          borderBottom: "2px solid white",
        }  }}
      >
        <Flag code={val.code} />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TextField
            variant="standard"
            sx={{
              "& & label.Mui-focused": { color: "white" },
              "& .MuiInput-underline:before": { borderBottomColor: "gray" },
              "& .MuiInput-underline:after": { borderBottomColor: "gray" },
              input: { color: "white", fontSize: "3rem" },
            }}
            placeholder="Search Countries"
            onChange={(e) =>
              setData(
                countriesData.filter((item) =>
                  item?.name?.toLowerCase()?.includes(e.target.value)
                )
              )
            }
          />
          <Box sx={{ overflowY: "scroll", height: "275px", fontSize: "1.2rem" }}>
            {data?.map((item, index) => (
              <Box
                key={index}
                sx={{
                  margin: "7px",
                  pl: "5px",
                  borderRadius: "5px",
                  border: "1px solid white",
                  display: "flex",
                  justifyContent: "space-between",
                  background: "",
                  alignItems: "center",
                  paddingRight: "5px",
                  cursor: "pointer",
                  backgroundColor:"#1A1A1A",
                  "&:hover": {
                    backgroundColor: "gray",
                  },
                }}
                onClick={() => {
                  setVal(item);
                  setOpen(false);
                  typeFormDispatch({
                    type: SET_RESPONSE,
                    payload: { query: "phoneExtension", ans: item.phone },
                  });
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    gap: "7px",
                    fontSize: "1.5rem",
                    alignItems: "center",
                  }}
                >
                  <Flag code={item.code} />
                  <p style={{}}>{item.name}</p>
                </Box>
                <p style={{ fontSize: "1.5rem" }}>+{item.phone}</p>
              </Box>
            ))}
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
