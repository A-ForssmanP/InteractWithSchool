import AvatarCarousel from "../../components/avatarCarousel/AvatarCarousel";
import { Box } from "@mui/material";

function TimeSchedule() {
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
