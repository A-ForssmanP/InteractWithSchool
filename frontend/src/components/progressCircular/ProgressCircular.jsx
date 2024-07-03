import CircularProgress from "@mui/material/CircularProgress";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

function ProgressCircular({ status }) {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      {status.isPending ? (
        <CircularProgress />
      ) : (
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          {status.success ? (
            <CheckCircleIcon sx={{ width: 80, height: 80, color: "green" }} />
          ) : (
            <ErrorIcon sx={{ width: 80, height: 80, color: "red" }} />
          )}
          <Typography mt={3}>
            {status.success
              ? "Tider Inskickade!"
              : "Ojdå...Något Gick Fel. Vänligen Försök Igen."}
          </Typography>
        </Box>
      )}
    </Box>
  );
}

export default ProgressCircular;
