import { Backdrop, Container, LinearProgress } from "@mui/material";
import logo from "../assets/growthX_logo.png"

export function Loading({ isLoading }) {
  return (
    <Backdrop
      open={isLoading}
      sx={{
        backgroundColor: "#000",
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Container
        sx={{ textAlign: "center", maxWidth: "12em" }}
        maxWidth={false}
      >
        <img src={logo} width={100} height={24} alt="logo" />
        <LinearProgress
          color="inherit"
          sx={{
            marginTop: 2,
            borderRadius: 2,
            ".MuiLinearProgress-bar2Indeterminate": {
              display: "none",
            },
          }}
        />
      </Container>
    </Backdrop>
  );
}
