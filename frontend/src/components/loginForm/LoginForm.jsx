import { Box, Paper, Typography, Button, TextField } from "@mui/material";

function LoginForm() {
  return (
    <Box>
      <Paper>
        <Typography>Logga in</Typography>
        <Box>
          <Typography variant="h4" fontSize={14}>
            Som demo användare:
          </Typography>
          <Button>Användare #1</Button>
          <Button>Användare #2</Button>
        </Box>
        <Typography>Eller</Typography>
        <Box component={"form"}>
          <Box>
            <TextField id="username-input" label="Användarnamn" type="text" />
            <TextField id="password-input" label="Lösenord" type="password" />
          </Box>
          <Button>Logga in</Button>
        </Box>
        <Button>Skapa användare</Button>
      </Paper>
    </Box>
  );
}

export default LoginForm;
