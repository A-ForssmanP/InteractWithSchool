import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import List from "@mui/material/List";
import Container from "@mui/material/Container";

import AbsenceItemStudent from "./absenceItemStudent/AbsenceItemStudent";

function Absence() {
  const [student, setStudent] = useState([]);

  useEffect(() => {
    const student = [
      { id: crypto.randomUUID(), name: "Barn 1" },
      { id: crypto.randomUUID(), name: "Barn 2" },
      { id: crypto.randomUUID(), name: "Barn 3" },
    ];
    setStudent(student);
  }, []);

  return (
    <Box mt={4.4}>
      <Container maxWidth="xs" sx={{ padding: { xs: "0", md: "0 24px" } }}>
        <h2>Registrera Frånvaro</h2>
        <List sx={{ mt: ".6rem" }}>
          {student.map((stnt) => {
            return <AbsenceItemStudent key={stnt.id} student={stnt} />;
          })}
        </List>
      </Container>
    </Box>
  );
}

export default Absence;
