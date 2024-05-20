import {
  Container,
  Box,
  CircularProgress,
  Typography,
  Button,
} from "@mui/material";
import { useState } from "react";

function RegisterDone() {
  const [isRegistrated, setIsRegistrated] = useState(false);

  setTimeout(() => {
    setIsRegistrated(true);
  }, 2000);

  return (
    <Container>
      <Box>
        {!isRegistrated ? (
          <CircularProgress />
        ) : (
          <Box>
            <Typography variant="h2" fontSize={26}>
              Ansökan Inskickad!
            </Typography>
            <Button href="../.." variant="contained">
              Tillbaka
            </Button>
          </Box>
        )}
      </Box>
    </Container>
  );
}

export default RegisterDone;
