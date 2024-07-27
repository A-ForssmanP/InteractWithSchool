import { Box, Paper, Typography, Button, TextField } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

function LoginForm() {
  return (
    <Box>
      <Paper
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: { sm: "fit-content" },
          p: { xs: 1, sm: 2 },
        }}
      >
        <Typography fontSize={20}>Logga in</Typography>
        <Box marginTop={1} marginBottom={1}>
          <Typography textAlign={"center"} variant="h4" fontSize={15}>
            Demo användare:
          </Typography>
          <Button startIcon={<PersonIcon />}>Användare #1</Button>
          <Button startIcon={<PersonIcon />}>Användare #2</Button>
        </Box>
        <Typography>Eller</Typography>
        <Box component={"form"} mt={1} mb={8} width={"100%"} maxWidth={"20rem"}>
          <Box display={"flex"} flexDirection={"column"} gap={2} mb={1}>
            <TextField id="username-input" label="Användarnamn" type="text" />
            <TextField id="password-input" label="Lösenord" type="password" />
          </Box>
          <Box display={"flex"} justifyContent={"center"}>
            <Button
              variant="contained"
              sx={{
                borderRadius: 4,
                pt: 1,
                pb: 1,
                pl: 3,
                pr: 3,
              }}
            >
              Logga in
            </Button>
          </Box>
        </Box>
        <Button>Skapa användare</Button>
      </Paper>
    </Box>
  );
}

export default LoginForm;
