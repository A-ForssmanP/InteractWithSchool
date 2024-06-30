import AvatarCarousel from "../../components/avatarCarousel/AvatarCarousel";
import { Box } from "@mui/material";
import axios from "axios";

function TimeSchedule() {
  // get the students data
  const getStudents = async () => {
    const res = await axios.get(
      `${import.meta.env.VITE_EXPRESS_SERVER}/timeSchedule`
    );
  };

  const avatarItems = [
    {
      id: crypto.randomUUID(),
      firstName: "Name#1",
      description: "Probably the most random thing you have ever seen!",
    },
    {
      id: crypto.randomUUID(),
      firstName: "Name#2",
      description: "Hello World!",
    },
    {
      id: crypto.randomUUID(),
      firstName: "Name#3",
      description: "I Love Coffe!",
    },
  ];
  return (
    <Box display={"flex"} justifyContent={"center"}>
      <AvatarCarousel avatarItems={avatarItems} />
    </Box>
  );
}

export default TimeSchedule;
