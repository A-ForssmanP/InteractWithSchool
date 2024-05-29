import Carousel from "react-material-ui-carousel";
import AvatarCarouselItem from "../avatarCarouselItem/AvatarCarouselItem";
import { deepOrange, deepPurple, green } from "@mui/material/colors";

function AvatarCarousel({ avatarItems }) {
  const bgColors = [deepOrange[400], deepPurple[400], green[400]];

  return (
    <Carousel navButtonsAlwaysVisible="true">
      {avatarItems.map((item, i) => (
        <AvatarCarouselItem key={i} item={item} bgColor={bgColors[i]} />
      ))}
    </Carousel>
  );
}

export default AvatarCarousel;
