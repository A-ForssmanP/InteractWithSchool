import Carousel from "react-material-ui-carousel";
import AvatarCarouselItem from "../avatarCarouselItem/AvatarCarouselItem";
import { deepOrange, deepPurple, green } from "@mui/material/colors";
import { Box } from "@mui/material";

function AvatarCarousel({ avatarItems }) {
  const bgColors = [deepOrange[400], deepPurple[400], green[400]];

  return (
    <Carousel
      navButtonsAlwaysVisible="true"
      autoPlay={false}
      sx={{ width: 500, mt: 7, pb: 1 }}
      animation={"slide"}
    >
      {avatarItems.map((item, i) => (
        <AvatarCarouselItem key={item._id} item={item} bgColor={bgColors[i]} />
      ))}
    </Carousel>
  );
}

export default AvatarCarousel;
