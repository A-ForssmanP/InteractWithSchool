import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DayTimePicker from "../../../components/dayTimePicker/DayTimePicker";
import { Box, Typography } from "@mui/material";
import axios from "axios";

function TimeScheduleRegister() {
  const [student, setStudent] = useState(null);
  const params = useParams();

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

  return (
    <Box>
      {!student ? (
        <Typography>Schedule Not Found</Typography>
      ) : (
        <Box>
          <Typography>
            Registrera Tid(<b>{student.schedule.caring}</b>) För,
            {student.firstName}
          </Typography>
          <DayTimePicker
            isRegistrated={student && student.schedule.scheduledDays}
          />
        </Box>
      )}
    </Box>
  );
}

export default TimeScheduleRegister;
