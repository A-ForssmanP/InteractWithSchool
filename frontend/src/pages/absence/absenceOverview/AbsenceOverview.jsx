import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function AbsenceOverview() {
  const [absenceData, setAbsenceData] = useState({});
  const { state } = useLocation();

  useEffect(() => {
    setAbsenceData(state.student);
  }, [state.student]);

  return (
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
                <TableCell>{}</TableCell>
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
  );
}

export default AbsenceOverview;
