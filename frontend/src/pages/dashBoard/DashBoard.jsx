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
  const mainContent = [null, null, <ReadOnlyDatePicker />, null];

  return (
    <Grid
      container
      width={"100%"}
      minHeight={"100%"}
      direction={{ xs: "column", sm: "row" }}
    >
      <Grid
        item
        xs={6}
        sm={10}
        md={11}
        display={"flex"}
        flexDirection={"column"}
        pl={{ sm: 2 }}
        pr={{ sm: 2 }}
      >
        <Box>
          <Box
            display={"flex"}
            flexDirection={{ xs: "column", sm: "row" }}
            gap={{ xs: 1, sm: 2 }}
            width={{ xs: "100%", sm: "fit-content" }}
            p={{ xs: 1, sm: 3 }}
            borderRadius={5}
            bgcolor={"purple"}
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
          flexGrow={1}
          justifyContent={{ xs: "center", md: "left" }}
          alignItems={{ sm: "center" }}
          maxWidth={"100%"}
        >
          <Box
            display={"grid"}
            gridAutoRows={"1fr"}
            gap={1}
            gridTemplateColumns={{ sm: "repeat(2, 1fr)" }}
            width={"100%"}
            maxWidth={1000}
          >
            {mainContent.map((item, indx) => {
              return (
                <Box
                  key={indx}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"stretch"}
                >
                  <Paper
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      flex: "1",
                      bgcolor: "rgba(173 ,200, 200 ,0.2)",
                      padding: 2,
                      borderRadius: 10,
                    }}
                  >
                    {item}
                  </Paper>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Grid>
      <Grid item xs bgcolor={"blue"}></Grid>
    </Grid>
  );
}

export default DashBoard;
