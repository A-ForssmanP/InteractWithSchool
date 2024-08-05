import { useState, useEffect } from "react";
import { Box, Typography, Paper, Grid, useTheme } from "@mui/material";
import ReadOnlyDatePicker from "../../components/readOnlyDatePicker/ReadOnlyDatePicker";
import ChartYearProg from "../../components/chartYearProg/ChartYearProg";
import DashBoardNotes from "../../components/dashBoardNotes/DashBoardNotes";
import DashboardClassList from "../../components/dashboardClassList/DashboardClassList";
import axios from "axios";

function DashBoard() {
  const [date, setDate] = useState(new Date());
  const [userFirstName, setUserFirstName] = useState("");
  const [schoolClassId, setSchoolClassId] = useState([]);
  const theme = useTheme();

  const fetchUserUrl = `${import.meta.env.VITE_EXPRESS_SERVER}/user`;

  useEffect(() => {
    getUserData();
  }, []);

  // get user data
  const getUserData = async () => {
    try {
      // get and set users firstName
      const res = await axios(fetchUserUrl, { withCredentials: true });
      const { user } = res.data;
      setUserFirstName(user.firstName);
      //array with student school class id
      // const classIdArray = user.students.map((student) => {
      //   return student.schoolClass;
      // });
      // setSchoolClassId(classIdArray);
    } catch (err) {
      setUserName(err.message);
    }
  };

  const mainContent = [
    <ChartYearProg />,
    <DashBoardNotes />,
    <ReadOnlyDatePicker />,
    null,
  ];
  const months = [
    "Jan",
    "Feb",
    "Mars",
    "April",
    "Maj",
    "Juni",
    "Juli",
    "Aug",
    "Sep",
    "Okt",
    "Nov",
    "Dec",
  ];

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
        <Box pt={{ sm: 1, md: 0.5, lg: 1 }}>
          <Box
            display={"flex"}
            flexDirection={{ xs: "column", sm: "row" }}
            gap={{ xs: 1, sm: 2 }}
            width={{ xs: "100%", sm: "fit-content" }}
            p={{ xs: 1, sm: 3 }}
            mt={{ xl: 1 }}
            borderRadius={{ sm: 5 }}
            bgcolor={theme.palette.secondary.main}
            color={theme.palette.grey[50]}
          >
            <Box>
              <Typography fontSize={{ xs: 18, sm: 20 }}>
                Hej {userFirstName.toUpperCase()},
              </Typography>
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
              <Typography fontSize={26}>{`${date.getDate()} ${
                months[date.getMonth()]
              }`}</Typography>
            </Box>
          </Box>
        </Box>
        <Box
          display={"flex"}
          flexGrow={1}
          justifyContent={{ xs: "center", md: "left" }}
          pt={{ sm: 0.5 }}
          pb={{ sm: 0.5 }}
          maxWidth={"100%"}
        >
          <Box
            flex={1}
            display={"grid"}
            gridAutoRows={"1fr"}
            gap={2}
            gridTemplateColumns={{ sm: "repeat(2, 1fr)" }}
            maxWidth={{ lg: 1200, xl: 1300 }}
            maxHeight={{ xl: 900 }}
            bgcolor={theme.palette.primary.main}
            p={{ sm: 3, md: 5, lg: 6 }}
            pt={{ xs: 2, sm: 3 }}
            pb={{ xs: 2, sm: 3 }}
            borderRadius={{ xs: 1, sm: 12 }}
            mt={{ xl: 1 }}
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
                      alignItems: "center",
                      flex: "1",
                      position: "relative",
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
      <Grid item xs bgcolor={theme.palette.secondary.main}>
        <DashboardClassList idArray={schoolClassId} />
      </Grid>
    </Grid>
  );
}

export default DashBoard;
