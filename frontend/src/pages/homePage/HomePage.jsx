import { Box, Card, CardContent, Typography } from "@mui/material";
import { orange } from "@mui/material/colors";

/* content:
welcome message
show day and time
weather?
show progress of scool year
anteckningar
list på sina barn
Klass lista med färäldrar
*/

function HomePage() {
  return (
    <Box>
      <Box
        minHeight={200}
        bgcolor={"rgba(230, 76, 255)"}
        color={"rgb(255,255,255)"}
        maxWidth={600}
      >
        <Typography variant="h1" fontSize={22} pt={3}>
          Välkommen,NAMN
        </Typography>
      </Box>
    </Box>
  );
}

export default HomePage;
