import { Box, Card, CardContent, Typography, Paper, Grid } from "@mui/material";
import { lightBlue, orange } from "@mui/material/colors";

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
    <Grid
      height={"100%"}
      direction={{ xs: "column", sm: "row" }}
      // columns={}
      container
      bgcolor={"yellow"}
    >
      <Grid item xs={4} sm={4} bgcolor={"red"}>
        <Card>s</Card>
      </Grid>
      <Grid item xs bgcolor={"red"}>
        <Card>sdsds</Card>
      </Grid>
    </Grid>
  );
  // <Box height={"100%"} bgcolor={"blue"}>
  // {
  /* <Grid
        container
        border={"6px solid green"}
        width={"100%"}
        height={"100%"}
        sx={{ flexDirection: { xs: "row", sm: "column" } }}
        columns={2}
      >
        <Grid
          item
          xs={6}
          sm={6}
          bgcolor={"yellow"}
          display={"Flex"}
          flexDirection={"column"}
          height={"100%"}
          width={"100%"}
          border={"6px solid black"}
        >
          <Box border={"3px solid red"}>
            <Box
              display={"flex"}
              flexDirection={{ xs: "column", sm: "row" }}
              // width={"fit-content"}
              gap={{ xs: 1, sm: 2 }}
              border={"5px solid magenta"}
              p={{ xs: 1, sm: 3 }}
              borderRadius={5}
              ml={{ sm: 2 }}
              width={{ xs: "100%", sm: "fit-content" }}
            >
              <Box>
                <Typography fontSize={{ xs: 18, sm: 20 }}>Hej NAMN,</Typography>
                <Typography fontSize={{ xs: 22, sm: 28 }}>
                  Välkommen tillbaka!
                </Typography>
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

          <Box
            display={"flex"}
            justifyContent={"left"}
            alignItems={{ sm: "center" }}
            flexGrow={1}
            border={"3px solid blue"}
          >
            <Grid
              container
              // justifyContent="center"
              // alignItems="center"
              width={1300}
              maxWidth={"100%"}
              height={"54%"}
              // rowSpacing={2}
              // columnSpacing={1}
              bgcolor={"orange"}
            >
              {Array(4)
                .fill("")
                .map((item, indx) => {
                  return (
                    <Grid
                      item
                      key={indx}
                      xs={6}
                      border={"1px solid black"}
                      p={{ xs: 1, sm: 2 }}
                    >
                      <Paper
                        sx={{
                          height: "100%",
                          width: "100%",
                          bgcolor: "lightBlue",
                          borderRadius: 5,
                        }}
                      ></Paper>
                    </Grid>
                  );
                })}
            </Grid>
          </Box>
        </Grid>
        <Box flexGrow={1}>
          <Grid item md={1} width={"100%"} height={"100%"} bgcolor={"purple"}>
            sds
          </Grid>
        </Box>
      </Grid> */
  // }
  // </Box>
  // );
}

export default DashBoard;
