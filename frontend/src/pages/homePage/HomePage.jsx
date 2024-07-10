import { Box, Card, CardContent, Typography, Paper, Grid } from "@mui/material";
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
    <Grid container border={"4px solid green"} height={"100%"}>
      <Grid
        item
        xs={10}
        bgcolor={"yellow"}
        display={"Flex"}
        flexDirection={"column"}
        height={"100%"}
      >
        <Box border={"1px solid red"}>
          <Box
          // minHeight={200}
          // bgcolor={"rgba(230, 76, 255)"}
          // color={"rgb(255,255,255)"}
          // maxWidth={600}
          >
            <Typography variant="p">Hej,NAMN,</Typography>
            <Typography variant="h2">Välkommen tillbaka!</Typography>
          </Box>
          <Box>
            <Typography>Dagens datum:</Typography>
            <Typography>1 Jan</Typography>
          </Box>
        </Box>
        <Box flexGrow={1} border={"1px solid blue"}>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            height={"100%"}
          >
            <Grid item xs={6}>
              <Paper>X</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper>X</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper>X</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper>X</Paper>
            </Grid>
          </Grid>
        </Box>
      </Grid>
      <Grid item xs={2}>
        s
      </Grid>
    </Grid>
  );
}

export default HomePage;
