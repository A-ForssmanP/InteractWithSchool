import CircularProgress from "@mui/material/CircularProgress";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

function ProgressCircular({ success }) {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      {!success ? (
        <CircularProgress />
      ) : (
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <CheckCircleIcon sx={{ width: 80, height: 80, color: "green" }} />
          <Typography>Tider Inskickade!</Typography>
        </Box>
      )}
    </Box>
  );
}

export default ProgressCircular;
