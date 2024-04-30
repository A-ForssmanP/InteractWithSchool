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
import { useState } from "react";

function AbsenceForm() {
  const [absence, setAbsence] = useState({ reason: "" });

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
          <Box display={"flex"} flexDirection={"column"}>
            <FormControl sx={{ maxWidth: 130 }} size="small">
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
            {absence.reason === "other" && (
              <TextField
                id="outlined-multiline-static"
                label="Vänligen fyll i anledning"
                multiline
                rows={4}
                defaultValue=""
              />
            )}
          </Box>
        </Box>

        <Button type="submit" variant="contained">
          Registrera
        </Button>
      </Box>
    </Container>
  );
}

export default AbsenceForm;
