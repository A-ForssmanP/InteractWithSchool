import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Typography } from "@mui/material";
import ButtonBack from "../../../components/buttonBack/ButtonBack";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function TimeScheduleOverview() {
  const [scheduleData, setScheduleData] = useState({});

  useEffect(() => {
    getScheduleData();
  }, []);

  const navigate = useNavigate();
  const { id } = useParams();
  const fetchUrl = `${import.meta.env.VITE_EXPRESS_SERVER}/timeSchedule/${id}`;

  //get caring data
  const getScheduleData = async () => {
    try {
      const res = await axios.get(fetchUrl);
      // console.log(res);
      if (!res.status === 200) {
        return setScheduleData(false);
      }
      const { student } = res.data;
      setScheduleData(student);
    } catch (err) {
      throw new Error(err);
    }
  };

  //navigate back to timeSchedule
  const navBack = () => {
    navigate(`../`);
  };

  // convert day from eng till swe
  const convertTime = (day) => {
    const days = ["Mån", "Tis", "Ons", "Tors", "Fre", "Lör", "Sön"];
    const months = [
      "Jan",
      "Feb",
      "Mars",
      "Apr",
      "Maj",
      "juni",
      "Juli",
      "Aug",
      "Sep",
      "Okt",
      "Nov",
      "Dec",
    ];

    const dayInWeek = days[new Date(day.date).getDay() - 1];
    const isMonth = months[new Date(day.date).getMonth()];
    const splitedDay = new Date(day.date).toDateString().split(" ");
    splitedDay.splice(0, 2, dayInWeek, isMonth);
    const isConverted = splitedDay.join(" ");
    return (
      <TableCell component="th" scope="row">
        {isConverted}
      </TableCell>
    );
  };

  return (
    <Box>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDirection={{ xs: "column", sm: "row" }}
        gap={{ xs: 2, sm: 0 }}
        pt={2}
        pb={2}
        pl={1.5}
        pr={1.5}
      >
        <Typography fontSize={28} variant="h2">
          Planerade Dagar, {scheduleData.firstName} {scheduleData.lastName}
        </Typography>
        <ButtonBack handleClick={navBack} />
        {/* <Box
          bgcolor={"red"}
          flexGrow={1}
          display="flex"
          justifyContent={{ sm: "flex-end" }}
          pr={{ sm: 0.5 }}
          mt={1}
        ></Box> */}
      </Box>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Datum:</TableCell>
              <TableCell>Från Kl:</TableCell>
              <TableCell>Till Kl:</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(scheduleData.schedule &&
              scheduleData.schedule.scheduledDays.length &&
              scheduleData.schedule.scheduledDays.map((day, indx) => (
                <TableRow
                  key={indx}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  {convertTime(day)}
                  <TableCell>{day.times.from}</TableCell>
                  <TableCell>{day.times.to}</TableCell>
                  {/* <TableCell>{abs.reason}</TableCell>
                  <TableCell>{abs.textReason}</TableCell>
                  <TableCell>{abs.status}</TableCell> */}
                </TableRow>
              ))) || (
              <TableRow
                // key={absenceData._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  Inga Datum I Planering
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default TimeScheduleOverview;
