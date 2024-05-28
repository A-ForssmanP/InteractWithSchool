import { Paper, Button } from "@mui/material";

function CarouselItem({ item }) {
  return (
    <Paper>
      <h2>{item.name}</h2>
      <p>{item.description}</p>

      <Button className="CheckButton">Check it out!</Button>
    </Paper>
  );
}

export default CarouselItem;
