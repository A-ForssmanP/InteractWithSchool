import { useTheme } from "@emotion/react";
import LoginForm from "../../components/loginForm/LoginForm";
import { Box } from "@mui/material";

function Login({ isAuthenticated }) {
  const theme = useTheme();
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      height={"100%"}
      sx={{
        background: {
          xs: `linear-gradient(to top left,${theme.palette.primary.main} 0%, ${theme.palette.primary.main} 
         23% ,white 0%, white 100%)`,
          md: `linear-gradient(to top left,${theme.palette.primary.main} 0%, ${theme.palette.primary.main} 
         28% ,white 0%, white 100%)`,
          lg: `linear-gradient(to top left,${theme.palette.primary.main} 0%, ${theme.palette.primary.main} 
         30% ,white 0%, white 100%)`,
        },
      }}
    >
      <LoginForm isAuthenticated={isAuthenticated} />
    </Box>
  );
}

export default Login;
