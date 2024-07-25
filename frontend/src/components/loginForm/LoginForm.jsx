import { Box, Paper, Typography, Button, TextField } from "@mui/material";

function LoginForm() {
  return (
    <Box>
      <Paper>
        <Typography>Logga in</Typography>
        <Box component={"from"}>
          <Button>Som demo användare</Button>
          <Typography>Eller</Typography>
        </Box>
        <Box component={"form"}>
          <Box>
            <TextField />
            <TextField />
          </Box>
          <Button>Logga in</Button>
        </Box>
        <Button>Skapa användare</Button>
      </Paper>
    </Box>
  );
}

export default LoginForm;
