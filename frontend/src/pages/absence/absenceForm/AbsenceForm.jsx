import {
  Container,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  Button,
  TextField,
} from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { useState } from "react";

function AbsenceForm() {
  const [absence, setAbsence] = useState({ reason: "", textReason: "" });

  //handle stateChange of the selected reason
  const handleChange = (e) => {
    setAbsence((currAbsence) => {
      return {
        ...currAbsence,
        reason: e.target.value,
      };
    });
  };
  return (
    <Container
      maxWidth="sm"
      sx={{
        border: "1px solid lightGrey",
        borderRadius: ".4rem",
        marginTop: { sm: "2.6rem" },
      }}
    >
      <Typography>Registrera frånvaro för NAMN</Typography>
      <Box component="form">
        <Box>
          <Box
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"space-between"}
          >
            <FormControl sx={{ minWidth: 130 }} size="small">
              <InputLabel id="reason">Anledning</InputLabel>
              <Select
                labelId="reason"
                id="reason"
                // value={age}
                label="Reason"
                onChange={handleChange}
                value={absence.reason}
                // onChange={handleChange}
              >
                {/* <MenuItem value={10}>Ten</MenuItem> */}
                <MenuItem value="sickness">Sjukdom</MenuItem>
                <MenuItem value="other">Annan</MenuItem>
              </Select>
            </FormControl>
            <Box>
              {!absence.reason && !absence.textReason ? (
                <ErrorOutlineIcon color="disabled" />
              ) : (
                <CheckCircleOutlineIcon color="success" />
              )}
            </Box>
          </Box>
          {absence.reason === "other" && (
            <Box>
              <TextField
                fullWidth
                id="textReason"
                label="Vänligen fyll i anledning"
                multiline
                rows={4}
                defaultValue=""
              />

              <Button>Klar</Button>
            </Box>
          )}
        </Box>
        <Typography>Ange berörda datum </Typography>
        <Button type="submit" variant="contained">
          Registrera
        </Button>
      </Box>
    </Container>
  );
}

export default AbsenceForm;
