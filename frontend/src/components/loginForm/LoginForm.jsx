import { Box, Paper, Typography, Button, TextField } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { useTheme } from "@emotion/react";

function LoginForm() {
  const theme = useTheme();
  return (
    <Box display={"flex"} justifyContent={"center"} width={"100%"}>
      <Paper
        elevation={3}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          maxWidth: "34rem",
          background: "rgba(255,255,255,.2)",
          borderRadius: 5,
          p: { xs: 1, sm: 4 },
        }}
      >
        <Typography fontSize={20}>Logga in</Typography>
        <Box
          marginTop={1}
          marginBottom={1.4}
          borderBottom={"1px solid lightgrey"}
        >
          <Typography textAlign={"center"} variant="h4" fontSize={15}>
            Demo användare:
          </Typography>
          <Button startIcon={<PersonIcon />}>Användare #1</Button>
          <Button startIcon={<PersonIcon />}>Användare #2</Button>
        </Box>
        <Typography>Eller</Typography>
        <Box
          component={"form"}
          mt={1.4}
          mb={15}
          width={"100%"}
          maxWidth={"20rem"}
        >
          <Box display={"flex"} flexDirection={"column"} gap={2} mb={2}>
            <TextField
              id="username-input"
              label="Användarnamn"
              type="text"
              InputProps={{
                style: {
                  borderRadius: "1.6rem",
                },
              }}
            />
            <TextField
              id="password-input"
              label="Lösenord"
              type="password"
              InputProps={{
                style: {
                  borderRadius: "1.6rem",
                },
              }}
            />
          </Box>
          <Box display={"flex"} justifyContent={"center"}>
            <Button
              variant="contained"
              type="submit"
              sx={{
                borderRadius: 4,
                pt: 1,
                pb: 1,
                pl: 3,
                pr: 3,
                background: theme.palette.secondary.main,
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
