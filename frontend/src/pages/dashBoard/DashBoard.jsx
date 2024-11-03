import { useState, useEffect } from "react";
import { Box, Typography, Paper, Grid, useTheme } from "@mui/material";
import ReadOnlyDatePicker from "../../components/readOnlyDatePicker/ReadOnlyDatePicker";
import ChartYearProg from "../../components/chartYearProg/ChartYearProg";
import DashBoardNotes from "../../components/dashBoardNotes/DashBoardNotes";
import DashboardClassList from "../../components/dashboardClassList/DashboardClassList";
import DashboardMyChild from "../../components/dashboardMyChild/DashboardMyChild";
import axios from "axios";

function DashBoard() {
  const [date, setDate] = useState(new Date());
  const [userFirstName, setUserFirstName] = useState("");
  const [userId, setUserId] = useState(null);
  const [studentNames, setStudentNames] = useState([]);
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
      setUserId(user._id);
      const studentNamesList = user.students.map(
        (student) => student.firstName
      );
      setStudentNames(studentNamesList);
    } catch (err) {
      setUserFirstName(err.message);
    }
  };

  const mainContent = [
    <ChartYearProg />,
    <DashBoardNotes />,
    <ReadOnlyDatePicker />,
    <DashboardMyChild names={studentNames} />,
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
        <Box pt={{ sm: 1, md: 0.5, lg: 1, xxl: 5 }}>
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
              <Typography fontSize={{ xs: 18, sm: 20, xxl: 34 }}>
                Hej {userFirstName.toUpperCase()},
              </Typography>
              <Typography fontSize={{ xs: 22, sm: 28, xxl: 42 }}>
                Välkommen tillbaka!
              </Typography>
            </Box>
            <Box
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"flex-start"}
              alignItems={"center"}
            >
              <Typography fontSize={{ xs: 16, xxl: 24 }}>
                Dagens datum:
              </Typography>
              {/* <Typography fontSize={{ xs: 26, xxl: 34 }}>{`${date.getDate()} ${
                months[date.getMonth()]
              }`}</Typography> */}
              <Typography fontSize={{ xs: 24, xxl: 34 }}>{`${date.getDate()}/${
                date.getMonth() + 1
              }-${date.getFullYear()}`}</Typography>
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
            maxWidth={{ lg: 1200, xl: 1300, xxl: 1500 }}
            maxHeight={{ xl: 900 }}
            bgcolor={theme.palette.primary.main}
            p={{ sm: 3, md: 5, lg: 6 }}
            pt={{ xs: 2, sm: 3 }}
            pb={{ xs: 2, sm: 3 }}
            borderRadius={{ xs: 1, sm: 12 }}
            mt={{ xl: 1, xxl: 10 }}
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
      <Grid
        item
        xs
        pt={{ sm: 1, md: 0.5, lg: 1, xxl: 2 }}
        bgcolor={theme.palette.grey[50]}
      >
        <DashboardClassList userId={userId && userId} />
      </Grid>
    </Grid>
  );
}

export default DashBoard;
