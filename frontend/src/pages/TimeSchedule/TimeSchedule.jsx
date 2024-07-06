import AvatarCarousel from "../../components/avatarCarousel/AvatarCarousel";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";

function TimeSchedule() {
  const [students, setStudents] = useState([]);

  // get the students data
  const getStudents = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_EXPRESS_SERVER}/timeSchedule`
      );
      const { studentsData } = res.data;
      setStudents(studentsData);
    } catch (err) {
      throw new Error(err);
    }
  };

  useEffect(() => {
    getStudents();
  }, []);

  return (
    <Box display={"flex"} justifyContent={"center"}>
      <AvatarCarousel avatarItems={students} />
    </Box>
  );
}

export default TimeSchedule;
