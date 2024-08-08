import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import DayTimePicker from "../../../components/dayTimePicker/DayTimePicker";
import ButtonBack from "../../../components/buttonBack/ButtonBack";
import axios from "axios";

function TimeScheduleRegister() {
  const [student, setStudent] = useState(null);
  const params = useParams();
  const navigate = useNavigate();

  //get student schedule
  const getSchedule = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_EXPRESS_SERVER}/timeSchedule/${params.id}`,
        { withCredentials: true }
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
        <Box pt={{ xs: 1, sm: 6, md: 8 }}>
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={{ xs: 1.5, sm: 5 }}
            flexDirection={{ xs: "column", sm: "row" }}
            mb={4}
          >
            <Typography
              textAlign={"center"}
              fontSize={{ xs: 18, sm: 20, lg: 24 }}
            >
              Registrera Tid(<b>{student.schedule.caring}</b>) För,
              {student.firstName}
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
