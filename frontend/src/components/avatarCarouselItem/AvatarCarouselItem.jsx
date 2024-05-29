import { Paper, Button, Box, Avatar, Typography } from "@mui/material";
import RangeDatePicker from "../rangeDatepicker/RangeDatePicker";

function AvatarCarouselItem({ item, bgColor }) {
  return (
    <Paper>
      <Box
        display={"flex"}
        justifyContent="center"
        alignItems={"center"}
        flexDirection={"column"}
      >
        <Avatar sx={{ bgcolor: bgColor, width: 55, height: 55 }}></Avatar>
        <Typography>{item.firstName}</Typography>
      </Box>
      <Box>
        <RangeDatePicker />
      </Box>
    </Paper>
  );
}

export default AvatarCarouselItem;
