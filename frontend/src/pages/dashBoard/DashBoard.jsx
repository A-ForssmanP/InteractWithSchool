import { Box, Card, CardContent, Typography, Paper, Grid } from "@mui/material";
import { lightBlue, orange } from "@mui/material/colors";
import ReadOnlyDatePicker from "../../components/readOnlyDatePicker/ReadOnlyDatePicker";
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
  const dashItems = [null, null, <ReadOnlyDatePicker />, null];
  return (
    <Grid
      container
      width={"100%"}
      // maxWidth={"100%"}
      height={"100%"}
      direction={{ xs: "column", sm: "row" }}
      border={"6px solid green"}
    >
      <Grid
        display={"flex"}
        flexDirection={"column"}
        item
        xs={6}
        sm={11}
        bgcolor={"red"}
        pl={{ sm: 2 }}
        width={"100%"}
      >
        <Box border={"3px solid yellow"}>
          <Box
            display={"flex"}
            flexDirection={{ xs: "column", sm: "row" }}
            // width={"fit-content"}
            gap={{ xs: 1, sm: 2 }}
            border={"5px solid magenta"}
            p={{ xs: 1, sm: 3 }}
            borderRadius={5}
            // ml={{ sm: 2 }}
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
          justifyContent={"flex-start"}
          alignItems={{ sm: "center" }}
          flexGrow={1}
          maxWidth={"100%"}
          border={"3px solid blue"}
        >
          <Box
            bgcolor={"yellow"}
            width={900}
            maxWidth={"100%"}
            display={"grid"}
            gridAutoRows={"1fr"}
            gridAutoColumns={"1fr"}
            gridTemplateColumns={"repeat(2, 1fr)"}
          >
            <Box bgcolor={"blue"} border={"1px solid black"}>
              1
            </Box>
            <Box bgcolor={"blue"} border={"1px solid black"}>
              2
            </Box>
            <Box bgcolor={"blue"} border={"1px solid black"}>
              3 <br />
              3232 <br />
              dsdsdsds
            </Box>
            <Box
              bgcolor={"blue"}
              border={"1px solid black"}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <ReadOnlyDatePicker />
            </Box>
          </Box>
          {/* <Box
            bgcolor={"yellow"}
            width={"100%"}
            display={"flex"}
            flexDirection={"column"}
            minHeight={"max-content"}
          >
            <Box display={{ sm: "flex" }}>
              <Paper
                sx={{
                  height: "100%",
                  width: "100%",
                  bgcolor: "lightBlue",
                  borderRadius: 5,
                }}
              >
                1
              </Paper>
              <Paper
                sx={{
                  height: "100%",
                  width: "100%",
                  bgcolor: "lightBlue",
                  borderRadius: 5,
                }}
              >
                {dashItems[2]}
              </Paper>
            </Box>
            <Box display={{ sm: "flex" }}>
              <Paper
                sx={{
                  // height: "100%",
                  // width: "100%",
                  bgcolor: "lightBlue",
                  borderRadius: 5,
                }}
              >
                3
              </Paper>
              <Paper
                sx={{
                  // height: "100%",
                  // width: "100%",
                  bgcolor: "lightBlue",
                  borderRadius: 5,
                }}
              >
                4
              </Paper>
            </Box>
          </Box> */}
          {/* <Grid
            container
            columns={2}
            // justifyContent="center"
            // alignItems="center"
            maxWidth={1300}
            // maxWidth={"100%"}
            // height={"54%"}
            // rowSpacing={4}
            // columnSpacing={2}
            bgcolor={"orange"}
            // minHeight={{ sm: 400 }}
            // rowGap={1}
            // columnGap={6}
            // gap={2}
          >
            <Grid
              item
              xs={1}
              sm={1}
              border={"1px solid black"}

              // p={{ xs: 1, sm: 2 }}
            >
              <Paper
                sx={{
                  height: "100%",
                  width: "100%",
                  bgcolor: "lightBlue",
                  borderRadius: 5,
                }}
              >
                1
              </Paper>
            </Grid>
            <Grid
              item
              xs={1}
              sm={2}
              border={"1px solid black"}

              // p={{ xs: 1, sm: 2 }}
            >
              <Paper
                sx={{
                  height: "100%",
                  width: "100%",
                  bgcolor: "lightBlue",
                  borderRadius: 5,
                }}
              >
                1
              </Paper>
            </Grid>
            <Grid
              item
              xs={2}
              sm={2}
              border={"1px solid black"}

              // p={{ xs: 1, sm: 2 }}
            >
              <Paper
                sx={{
                  height: "100%",
                  width: "100%",
                  bgcolor: "lightBlue",
                  borderRadius: 5,
                }}
              >
                1
              </Paper>
            </Grid>
            <Grid
              item
              xs={2}
              sm={2}
              border={"1px solid black"}

              // p={{ xs: 1, sm: 2 }}
            >
              <Paper
                sx={{
                  height: "100%",
                  width: "100%",
                  bgcolor: "lightBlue",
                  borderRadius: 5,
                }}
              >
                1
              </Paper>
            </Grid> */}

          {/* {dashItems.map((item, indx) => {
              return (
                <Grid
                  item
                  key={indx}
                  xs={2}
                  sm={2}
                  border={"1px solid black"}

                  // p={{ xs: 1, sm: 2 }}
                >
                  <Paper
                    sx={{
                      height: "100%",
                      width: "100%",
                      bgcolor: "lightBlue",
                      borderRadius: 5,
                    }}
                  >
                    {item}
                  </Paper>
                </Grid>
              );
            })} */}
          {/* <Grid item xs={1} flexShrink={1} border={"1px solid black"}>
              1
            </Grid>
            <Grid item xs={1} border={"1px solid black"}>
              2
            </Grid>
            <Grid item xs={1} border={"1px solid black"}>
              3
            </Grid>
            <Grid item xs={1} border={"1px solid black"}>
              4
            </Grid> */}
          {/* </Grid> */}
        </Box>
      </Grid>
      <Grid item xs bgcolor={"blue"}></Grid>
    </Grid>
  );

  /*<Grid
      container
      border={"6px solid green"}
      width={"100%"}
      height={"100%"}
      sx={{ flexDirection: { xs: "column", sm: "row" } }}
      // columns={2}
    >
      <Grid
        item
        xs={6}
        sm={11}
        bgcolor={"yellow"}
        display={"Flex"}
        // flexDirection={"column"}
        // height={"100%"}
        // width={"100%"}
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
            justifyContent="center"
            alignItems="center"
            width={1300}
            maxWidth={"100%"}
            height={"54%"}
            rowSpacing={2}
            columnSpacing={1}
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
      {/* <Box flexGrow={1}> */
  /*<Grid item xs bgcolor={"purple"}>
        sds
      </Grid>
      // {/* </Box> */
  // </Grid>

  // </Box>
  // );
}

export default DashBoard;
