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
import DoneIcon from "@mui/icons-material/Done";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import AbsenceReason from "../absenceReason/AbsenceReason";
import Callendar from "../../../components/calendar/Callendar";
import AbsenceSymmaryView from "../absenceSummaryView/AbsenceSymmaryView";
import { useState } from "react";

function AbsenceForm() {
  const [absence, setAbsence] = useState({
    reason: "",
    textReason: "",
    dates: { fromDate: "", toDate: null },
  });

  const [isDone, setIsDone] = useState({
    reason: false,
    dates: false,
  });

  //handle stateChange of the selected reason
  const handleChange = (e) => {
    setAbsence((currAbsence) => {
      return {
        ...currAbsence,
        reason: e.target.value,
      };
    });
  };

  //update the selected dates for the state Absence.dates
  const getDates = (from, to) => {
    setAbsence((currAbs) => {
      return {
        ...currAbs,
        dates: {
          fromDate: from,
          toDate: to,
        },
      };
    });
  };

  //update absence field to be done
  const fieldIsDone = (name) => {
    setIsDone((currState) => {
      return {
        ...currState,
        [name]: true,
      };
    });
  };

  const handleText = (text) => {
    if (text.length) {
      setAbsence((currAbsence) => {
        return {
          ...currAbsence,
          textReason: text,
        };
      });
    }
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
      <Typography variant="h1" fontSize={26}>
        Registrera frånvaro för NAMN
      </Typography>
      <Box component="form">
        <AbsenceReason
          handleChange={handleChange}
          absence={absence}
          handleText={handleText}
          fieldIsDone={fieldIsDone}
          isDone={isDone.reason}
        />
        {isDone.reason && (
          <Box>
            <Typography>Fyll i dag(ar) </Typography>
            <Callendar
              getDates={getDates}
              isDisabled={isDone.dates}
              fieldIsDone={fieldIsDone}
              isDone={isDone.dates}
            />
          </Box>
        )}
        {isDone.reason && isDone.dates && (
          <>
            <AbsenceSymmaryView absence={absence} />
            <Button type="submit" variant="contained">
              Registrera
            </Button>
          </>
        )}
      </Box>
    </Container>
  );
}

export default AbsenceForm;
