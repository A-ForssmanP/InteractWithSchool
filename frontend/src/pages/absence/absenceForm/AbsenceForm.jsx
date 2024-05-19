import { Container, Box, Typography, Button } from "@mui/material";
import AbsenceReason from "../absenceReason/AbsenceReason";
import Callendar from "../../../components/calendar/Callendar";
import AbsenceSymmaryView from "../absenceSummaryView/AbsenceSymmaryView";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

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

  const navigate = useNavigate();
  const { state } = useLocation();
  const student = state.student;

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

  //update absence field to be NOT done
  const fieldIsNotDone = (name) => {
    setIsDone((currState) => {
      return {
        ...currState,
        [name]: false,
      };
    });
  };

  // set absence.textReason to be the value of the textfield input
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

  // handle submitting the form
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.put(
      `${import.meta.env.VITE_EXPRESS_SERVER}/absence/${student._id}/register`,
      { data: absence }
    );
    navigate("..");
    console.log(res);
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
      <Typography variant="h1" fontSize={26} textAlign={"center"} mt={2}>
        Registrera frånvaro för {student.firstName} {student.lastName}
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        display={"flex"}
        flexDirection={"column"}
        gap={3}
        mt={4}
      >
        <AbsenceReason
          handleChange={handleChange}
          absence={absence}
          handleText={handleText}
          fieldIsDone={fieldIsDone}
          isDone={isDone.reason}
          fieldIsNotDone={fieldIsNotDone}
        />
        {isDone.reason && (
          <Box>
            <Typography>Fyll i dag(ar) </Typography>
            <Callendar
              getDates={getDates}
              isDisabled={isDone.dates}
              fieldIsDone={fieldIsDone}
              isDone={isDone.dates}
              fieldIsNotDone={fieldIsNotDone}
            />
          </Box>
        )}
        {isDone.reason && isDone.dates && (
          <>
            <AbsenceSymmaryView absence={absence} />
            <Button
              type="submit"
              variant="contained"
              sx={{ marginBottom: "1rem" }}
            >
              Registrera
            </Button>
          </>
        )}
      </Box>
    </Container>
  );
}

export default AbsenceForm;
