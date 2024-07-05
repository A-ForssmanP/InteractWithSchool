import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import DayTimePicker from "../../../components/dayTimePicker/DayTimePicker";
import { Box, Typography } from "@mui/material";
import axios from "axios";
import ButtonBack from "../../../components/buttonBack/ButtonBack";

function TimeScheduleRegister() {
  const [student, setStudent] = useState(null);
  const params = useParams();
  const navigate = useNavigate();

  //get student schedule
  const getSchedule = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_EXPRESS_SERVER}/timeSchedule/${params.id}`
      );
      const { student } = res.data;
      setStudent(student);
    } catch (err) {
      setStudent(false);
      throw new Error(err.message);
    }
  };

  useEffect(() => {
    getSchedule();
  }, []);

  //navigate back to TimeSchedule
  const navBack = () => {
    navigate(`../`);
  };

  return (
    <Box>
      {!student ? (
        <Typography>Schedule Not Found</Typography>
      ) : (
        <Box mt={8}>
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={{ xs: 1.5, sm: 5 }}
            flexDirection={{ xs: "column", sm: "row" }}
            mb={4}
          >
            <Typography textAlign={"center"}>
              Registrera Tid(<b>{student.schedule.caring}</b>) För,
              {student.firstName} {student.lastName}
            </Typography>
            <ButtonBack handleClick={navBack} />
          </Box>

          <DayTimePicker
            isRegistrated={student && student.schedule.scheduledDays}
          />
        </Box>
      )}
    </Box>
  );
}

export default TimeScheduleRegister;
