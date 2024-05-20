import {
  Container,
  Box,
  CircularProgress,
  Typography,
  Button,
  Card,
  CardContent,
} from "@mui/material";
import { useState } from "react";

function RegisterDone() {
  const [isRegistrated, setIsRegistrated] = useState(false);

  setTimeout(() => {
    setIsRegistrated(true);
  }, 2000);

  return (
    <Container>
      <Box display={"flex"} justifyContent={"center"} mt={10}>
        {!isRegistrated ? (
          <CircularProgress />
        ) : (
          <Card
            sx={{
              minWidth: { sm: "25rem" },
              display: "flex",
              justifyContent: "center",
            }}
          >
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography variant="h2" fontSize={26} mb={2}>
                Frånvaro Inskickad!
              </Typography>
              <Button href="../.." variant="contained">
                Tillbaka{" "}
              </Button>
            </CardContent>
          </Card>
        )}
      </Box>
    </Container>
  );
}

export default RegisterDone;
