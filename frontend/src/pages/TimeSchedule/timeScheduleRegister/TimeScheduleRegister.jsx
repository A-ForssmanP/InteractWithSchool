import { useState } from "react";
import { useParams } from "react-router-dom";
import DayTimePicker from "../../../components/dayTimePicker/DayTimePicker";
import { Box } from "@mui/material";
import axios from "axios";

function TimeScheduleRegister() {
  const [student, setStudent] = useState({});
  const params = useParams();

  //get student schedule
  const getSchedule = async () => {
    try {
      const res = axios.get(
        `${import.meta.env.VITE_EXPRESS_SERVER}/timeSchedule/${
          params.id
        }/register`
      );
    } catch (err) {
      throw new Error(err);
    }
  };

  return (
    <Box>
      <DayTimePicker />
    </Box>
  );
}

export default TimeScheduleRegister;
