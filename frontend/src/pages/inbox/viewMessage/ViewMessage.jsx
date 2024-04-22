import { useLocation, useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import ButtonBack from "../../../components/buttonBack/ButtonBack";

function ViewMessage() {
  //   const { messageId } = useParams();
  const { state } = useLocation();
  const msg = state.message;

  return (
    <Card>
      <CardContent>
        <Box>
          <Typography sx={{ fontSize: 15 }} color="text.secondary">
            {msg.from}
          </Typography>
          <Typography sx={{ fontSize: 22 }}>{msg.title}</Typography>
        </Box>

        <Typography variant="p">{msg.text}</Typography>
        <Box marginTop={3} display={"flex"} justifyContent={"flex-end"}>
          <ButtonBack />
        </Box>
      </CardContent>
    </Card>
  );
}

export default ViewMessage;
