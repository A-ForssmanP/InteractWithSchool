import { Box, Paper, Typography, Button, TextField } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { useTheme } from "@emotion/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function LoginForm({ isAuthenticated }) {
  const [inputValues, setInputValues] = useState({
    username: "",
    password: "",
  });
  const [loginError, setLoginError] = useState(null);
  const navigate = useNavigate();
  const theme = useTheme();
  const postUrl = `${import.meta.env.VITE_EXPRESS_SERVER}/login`;

  //update input values
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputValues((curr) => {
      return {
        ...curr,
        [name]: value,
      };
    });
  };

  // handle submitting the form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(postUrl, inputValues, {
        withCredentials: true,
      });
      if (loginError) {
        setLoginError(null);
      }
      isAuthenticated();
      navigate("/");
    } catch (err) {
      setLoginError(err.request.response);
    }
  };

  //login with demo user
  const loginDemoUser = async (userName, password) => {
    try {
      const res = await axios.post(
        postUrl,
        {
          username: userName,
          password: password,
        },
        {
          withCredentials: true,
        }
      );
      console.log(document.cookie);
      if (loginError) {
        setLoginError(null);
      }
      isAuthenticated();
      navigate("/");
    } catch (err) {
      setLoginError(err.request.response);
    }
  };

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
          <Button
            onClick={() => loginDemoUser("Demo1", "demo1")}
            startIcon={<PersonIcon />}
          >
            Användare #1
          </Button>
          <Button
            onClick={() => loginDemoUser("Demo2", "demo2")}
            startIcon={<PersonIcon />}
          >
            Användare #2
          </Button>
        </Box>
        <Typography>Eller</Typography>
        {loginError && (
          <Typography color={theme.palette.secondary.light}>
            {loginError}
          </Typography>
        )}
        <Box
          component={"form"}
          mt={1.4}
          mb={15}
          width={"100%"}
          maxWidth={"20rem"}
          onSubmit={handleSubmit}
        >
          <Box display={"flex"} flexDirection={"column"} gap={2} mb={2}>
            <TextField
              id="username-input"
              label="Användarnamn"
              type="text"
              value={inputValues["username"]}
              name="username"
              onChange={handleInput}
              required
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
              value={inputValues["password"]}
              name="password"
              onChange={handleInput}
              required
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
        <Button onClick={() => navigate("/skapa_konto")}>
          Skapa användare
        </Button>
      </Paper>
    </Box>
  );
}

export default LoginForm;
