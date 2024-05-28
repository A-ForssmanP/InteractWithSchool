import Carousel from "react-material-ui-carousel";
import CarouselItem from "./CarouselItem";
import { Paper, Button } from "@mui/material";

function CarouselSlider() {
  const items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
    },
  ];

  return (
    <Carousel navButtonsAlwaysVisible="true">
      {items.map((item, i) => (
        <CarouselItem key={i} item={item} />
      ))}
    </Carousel>
  );
}

export default CarouselSlider;
