import {
  Box,
  Card,
  CardContent,
  Typography,
  Paper,
  Grid,
  useTheme,
} from "@mui/material";
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
  const theme = useTheme();
  const mainContent = [null, null, <ReadOnlyDatePicker />, null];
  console.log(theme.palette);
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
            bgcolor={theme.palette.secondary.main}
            color={theme.palette.grey[50]}
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
            gap={2}
            gridTemplateColumns={{ sm: "repeat(2, 1fr)" }}
            width={"100%"}
            maxWidth={1000}
            bgcolor={theme.palette.primary.main}
            p={{ sm: 3, md: 6 }}
            pt={{ xs: 2, sm: 3 }}
            pb={{ xs: 2, sm: 3 }}
            borderRadius={{ xs: 1, sm: 12 }}
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
                      bgcolor: "rgba(255,255,255,0.5)",
                      padding: 2,
                      borderRadius: { sm: 10 },
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
      <Grid item xs bgcolor={theme.palette.secondary.main}></Grid>
    </Grid>
  );
}

export default DashBoard;
