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

function DashBoard() {
  return (
    <Grid container border={"4px solid green"} height={"100%"}>
      <Grid
        item
        xs={11}
        // bgcolor={"yellow"}
        display={"Flex"}
        flexDirection={"column"}
        height={"100%"}
        border={"3px solid black"}
      >
        <Box border={"3px solid red"}>
          <Box
            display={"flex"}
            width={"fit-content"}
            gap={2}
            border={"5px solid magenta"}
            p={3}
            borderRadius={5}
          >
            <Box>
              <Typography fontSize={20}>Hej NAMN,</Typography>
              <Typography fontSize={28}>Välkommen tillbaka!</Typography>
            </Box>
            <Box
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"flex-start"}
              alignItems={"center"}
            >
              <Typography fontSize={16}>Dagens datum:</Typography>
              <Typography fontSize={26}>1 Jan</Typography>
            </Box>
          </Box>
        </Box>

        <Box flexGrow={1} border={"3px solid blue"}>
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
      {/* <Grid item xs={1} bgcolor={"purple"}></Grid> */}
    </Grid>
  );
}

export default DashBoard;
