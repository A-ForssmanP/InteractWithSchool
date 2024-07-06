import {
  Paper,
  Button,
  Box,
  Avatar,
  Typography,
  Stack,
  Divider,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

function AvatarCarouselItem({ item, bgColor }) {
  const navigate = useNavigate();

  return (
    <Paper>
      <Box
        display={"flex"}
        justifyContent="center"
        alignItems={"center"}
        flexDirection={"column"}
        height={"100%"}
      >
        <Avatar sx={{ bgcolor: bgColor, width: 55, height: 55 }}></Avatar>
        <Typography>{item.firstName}</Typography>
      </Box>
      <Stack
        display={"flex"}
        justifyContent={"center"}
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        divider={<Divider orientation="vertical" flexItem />}
        marginTop={10}
        pb={5}
      >
        <Button
          onClick={() => navigate(`${item._id}/registrera_omsorg`)}
          sx={{ width: { md: 170 } }}
          variant="contained"
          startIcon={""}
        >
          Registrera tid
        </Button>
        <Button
          onClick={() => navigate(`${item._id}/planerad_omsorg`)}
          sx={{ width: { md: 170 } }}
          variant="contained"
          endIcon={""}
        >
          Planerad tid
        </Button>
      </Stack>
    </Paper>
  );
}

export default AvatarCarouselItem;
