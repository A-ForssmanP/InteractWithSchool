import { Box, Typography, Card, CardContent } from "@mui/material";

function AbsenceSymmaryView({ absence }) {
  return (
    <Box>
      <Typography variant="h2" fontSize={24} textAlign={"center"}>
        Översikt
      </Typography>
      <Box>
        <Box display={"flex"}>
          <Typography width={80}>Anledning:</Typography>
          <Typography ml={1}>{absence.reason}</Typography>
        </Box>
        <Box display={"flex"}>
          <Typography width={80}>Beskriving:</Typography>
          <Typography ml={1}>{absence.textReason}</Typography>
        </Box>
        <Box display={"flex"}>
          <Typography width={80}>Dag(ar):</Typography>
          <Typography ml={1}>{absence.dates.fromDate}</Typography>
          {absence.dates.fromDate !== absence.dates.toDate && (
            <>
              <Typography ml={1} mr={1}>
                -
              </Typography>
              <Typography>{absence.dates.toDate}</Typography>
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default AbsenceSymmaryView;
