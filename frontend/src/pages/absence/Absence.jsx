import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import List from "@mui/material/List";

import AbsenceItemChild from "./absenceItemChild/AbsenceItemChild";

function Absence() {
  const [child, setChild] = useState([]);

  useEffect(() => {
    const child = [
      { id: crypto.randomUUID(), name: "Barn 1" },
      { id: crypto.randomUUID(), name: "Barn 2" },
      { id: crypto.randomUUID(), name: "Barn 3" },
    ];
    setChild(child);
  }, []);

  return (
    <Box>
      <h2>Registrera Frånvaro</h2>
      <List>
        {child.map((c) => {
          return <AbsenceItemChild key={c.id} child={c} />;
        })}
      </List>
    </Box>
  );
}

export default Absence;
