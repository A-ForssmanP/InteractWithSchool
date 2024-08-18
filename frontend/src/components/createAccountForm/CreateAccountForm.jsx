import {
  Box,
  Paper,
  Typography,
  Button,
  TextField,
  InputAdornment,
} from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import { useTheme } from "@emotion/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ButtonBack from "../../components/buttonBack/ButtonBack";

function CreateAccountForm({ isAuthenticated }) {
  const [inputValues, setInputValues] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
  });
  const [createError, setCreateError] = useState(null);
  const navigate = useNavigate();
  const theme = useTheme();
  const postUrl = `${import.meta.env.VITE_EXPRESS_SERVER}/create_account`;

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
    if (!inputValues.firstName.length) {
      return setCreateError("Förnamn saknas");
    }
    if (!inputValues.lastName.length) {
      return setCreateError("Efternamn saknas");
    }
    if (!inputValues.username.length) {
      return setCreateError("Användarnamn saknas");
    }
    if (inputValues.password.length < 6) {
      return setCreateError("Lösenord måste vara minst 6 tecken");
    }
    try {
      const res = await axios.post(postUrl, inputValues, {
        withCredentials: true,
      });
      if (createError) {
        setCreateError(null);
      }
      isAuthenticated();
      navigate("/");
    } catch (err) {
      setCreateError(err.request.response);
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
        <Typography fontSize={20}>Skapa konto</Typography>
        {createError && (
          <Typography color={theme.palette.secondary.light}>
            {createError}
          </Typography>
        )}
        <Box
          component={"form"}
          mt={1.4}
          mb={10}
          width={"100%"}
          maxWidth={"20rem"}
          onSubmit={handleSubmit}
        >
          <Box display={"flex"} flexDirection={"column"} gap={2} mb={2}>
            <TextField
              id="firstName-input"
              label="Förnamn"
              type="text"
              value={inputValues["firstName"]}
              name="firstName"
              onChange={handleInput}
              required
              InputProps={{
                style: {
                  borderRadius: "1.6rem",
                },
                endAdornment: (
                  <InputAdornment position="start">
                    {inputValues.firstName.length ? (
                      <DoneIcon color="success" />
                    ) : null}
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              id="lastName-input"
              label="Efternamn"
              type="text"
              value={inputValues["lastName"]}
              name="lastName"
              onChange={handleInput}
              required
              InputProps={{
                style: {
                  borderRadius: "1.6rem",
                },
                endAdornment: (
                  <InputAdornment position="start">
                    {inputValues.lastName.length ? (
                      <DoneIcon color="success" />
                    ) : null}
                  </InputAdornment>
                ),
              }}
            />
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
                endAdornment: (
                  <InputAdornment position="start">
                    {inputValues.username.length ? (
                      <DoneIcon color="success" />
                    ) : null}
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              id="password-input"
              label="Lösenord,minst 6 tecken"
              type="password"
              value={inputValues["password"]}
              name="password"
              onChange={handleInput}
              required
              InputProps={{
                style: {
                  borderRadius: "1.6rem",
                },
                endAdornment: (
                  <InputAdornment position="start">
                    {inputValues.password.length >= 6 ? (
                      <DoneIcon color="success" />
                    ) : null}
                  </InputAdornment>
                ),
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
              Skapa konto
            </Button>
          </Box>
        </Box>
        <ButtonBack handleClick={() => navigate("/logga_in")} />
      </Paper>
    </Box>
  );
}

export default CreateAccountForm;
