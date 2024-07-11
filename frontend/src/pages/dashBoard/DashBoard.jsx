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

// render grid items
const renderGridItems = () => {
  for (let i = 0; i < 4; i++) {
    return (
      <Grid maxWidth={"100%"} item xs={6} border={"1px solid black"}>
        <Paper
          sx={{ bgcolor: "lightblue", height: "100%", width: "100%" }}
        ></Paper>
      </Grid>
    );
  }
};

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

                    // padding={{ sm: 2 }}
                    // paddingRight={2}

                    // display={"flex"}
                    // justifyContent={"center"}
                    // alignItems={"center"}
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
            {/* {Array(4)
              .fill(
                <Grid
                  item
                  xs={6}
                  border={"1px solid black"}
                  p={2}

                  // display={"flex"}
                  // justifyContent={"center"}
                  // alignItems={"center"}
                >
                  <Paper
                    sx={{
                      height: "100%",
                      width: "100%",
                      bgcolor: "lightBlue",
                    }}
                  ></Paper>
                </Grid>
              )
              .map((item, indx) => {
                return item;
              })} */}
            {/* <Grid maxWidth={"100%"} item xs={6} border={"1px solid black"}>
              <Paper
                sx={{ bgcolor: "lightblue", height: "100%", width: "100%" }}
              ></Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper
                sx={{ bgcolor: "lightblue", height: "100%", width: "100%" }}
              ></Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper
                sx={{ bgcolor: "lightblue", height: "100%", width: "100%" }}
              ></Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper
                sx={{ bgcolor: "lightblue", height: "100%", width: "100%" }}
              ></Paper>
            </Grid> */}
          </Grid>
        </Box>
      </Grid>
      {/* <Grid item xs={1} bgcolor={"purple"}></Grid> */}
    </Grid>
  );
}

export default DashBoard;
