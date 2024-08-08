import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ButtonBack from "../../../components/buttonBack/ButtonBack";

function AbsenceOverview() {
  const [absenceData, setAbsenceData] = useState({});
  const { state } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setAbsenceData(state.student);
  }, [state.student]);

  //navigate back to absence
  const navBack = () => {
    navigate(`../`);
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
          Översikt frånvaro,{absenceData.firstName}
        </Typography>
        <ButtonBack handleClick={navBack} />
      </Box>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Från</TableCell>
              <TableCell>Till</TableCell>
              <TableCell>Anledning</TableCell>
              <TableCell>Beskrivning</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(absenceData.absence &&
              absenceData.absence.prevAbsences.length &&
              absenceData.absence.prevAbsences.map((abs) => (
                <TableRow
                  key={abs._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {abs.dates.fromDate}
                  </TableCell>
                  <TableCell>{abs.dates.toDate}</TableCell>
                  <TableCell>{abs.reason}</TableCell>
                  <TableCell>{abs.textReason}</TableCell>
                  <TableCell>{abs.status}</TableCell>
                </TableRow>
              ))) || (
              <TableRow
                key={absenceData._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  Ingen Frånvaro Registrerad
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default AbsenceOverview;
