import { Box, Typography, Card, CardContent } from "@mui/material";

function AbsenceSymmaryView({ absence }) {
  return (
    <Box>
      <Typography>Översikt</Typography>
      <Box>
        <Box>
          <Typography>Anledning:</Typography>
          <Typography>{absence.reason}</Typography>
        </Box>
        <Box bgcolor={"red"}>
          <Typography>Beskriving:</Typography>
          <Typography paragraph="true" variant="body2" gutterBottom>
            {absence.textReason ? absence.textReason : "-"}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default AbsenceSymmaryView;
