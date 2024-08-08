import { useLocation, useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import ButtonBack from "../../../components/buttonBack/ButtonBack";

function ViewMessage() {
  const navigate = useNavigate();

  const { state } = useLocation();
  const msg = state.message;

  //navigate back to inbox
  const navBack = () => {
    navigate(`..`);
  };

  return (
    <Card
      sx={{
        maxWidth: { xl: "76em" },
        margin: { md: "0 auto 0 auto" },
        pt: { md: "3em" },
      }}
    >
      <CardContent>
        <Box marginBottom={3} display={"flex"} justifyContent={"flex-end"}>
          <ButtonBack handleClick={navBack} />
        </Box>
        <Box>
          <Typography sx={{ fontSize: 18 }} color="text.secondary">
            {msg.from}
          </Typography>
          <Typography sx={{ fontSize: 27 }}>{msg.title}</Typography>
        </Box>

        <Typography variant="p" fontSize={{ xs: 17, sm: 20 }}>
          {msg.text}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ViewMessage;
