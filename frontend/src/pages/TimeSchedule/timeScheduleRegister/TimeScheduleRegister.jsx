import { useState } from "react";
import { useParams } from "react-router-dom";
import DayTimePicker from "../../../components/dayTimePicker/DayTimePicker";
import { Box } from "@mui/material";
import axios from "axios";

function TimeScheduleRegister() {
  const [schedule, setSchedule] = useState({});
  const params = useParams();

  //Continue work here !!
  //get student schedule
  const getSchedule = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_EXPRESS_SERVER}/timeSchedule/${params.id}`
      );
      console.log(res);
    } catch (err) {
      console.log("Scedule not found!");
      throw new Error(err.message);
    }
  };
  getSchedule();
  return (
    <Box>
      <DayTimePicker />
    </Box>
  );
}

export default TimeScheduleRegister;
