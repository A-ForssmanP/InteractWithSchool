import AvatarCarousel from "../../components/avatarCarousel/AvatarCarousel";
import { Box } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

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

  // const avatarItems = [
  //   {
  //     id: crypto.randomUUID(),
  //     firstName: "Name#1",
  //     description: "Probably the most random thing you have ever seen!",
  //   },
  //   {
  //     id: crypto.randomUUID(),
  //     firstName: "Name#2",
  //     description: "Hello World!",
  //   },
  //   {
  //     id: crypto.randomUUID(),
  //     firstName: "Name#3",
  //     description: "I Love Coffe!",
  //   },
  // ];
  return (
    <Box display={"flex"} justifyContent={"center"}>
      <AvatarCarousel avatarItems={students} />
    </Box>
  );
}

export default TimeSchedule;
