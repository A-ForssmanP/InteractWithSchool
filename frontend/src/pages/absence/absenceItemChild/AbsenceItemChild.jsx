import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";

function AbsenceItemChild({ child }) {
  return (
    <Card>
      <CardContent>
        <Box display="flex">
          <Typography>{child.name}</Typography>
          <CardActions>
            <Button>Välj</Button>
          </CardActions>
        </Box>
      </CardContent>
    </Card>
  );
}

export default AbsenceItemChild;
