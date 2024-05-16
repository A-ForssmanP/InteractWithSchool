import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import List from "@mui/material/List";
import Container from "@mui/material/Container";
import axios from "axios";

import AbsenceItemStudent from "./absenceItemStudent/AbsenceItemStudent";

function Absence() {
  const [students, setStudents] = useState([]);

  // get data for the student(s)
  const getStudentData = async () => {
    const res = await axios(`${import.meta.env.VITE_EXPRESS_SERVER}/absence`);
    setStudents(res.data);
  };

  useEffect(() => {
    // const student = [
    //   { id: crypto.randomUUID(), name: "Barn 1" },
    //   { id: crypto.randomUUID(), name: "Barn 2" },
    //   { id: crypto.randomUUID(), name: "Barn 3" },
    // ];
    // setStudent(student);
    getStudentData();
  }, []);
  console.log(students);
  return (
    <Box mt={4.4}>
      <Container maxWidth="xs" sx={{ padding: { xs: "0", md: "0 24px" } }}>
        <h2>Registrera Frånvaro</h2>
        <List sx={{ mt: ".6rem" }}>
          {students.map((stnt) => {
            return <AbsenceItemStudent key={stnt._id} student={stnt} />;
          })}
        </List>
      </Container>
    </Box>
  );
}

export default Absence;
