import Alert from "@mui/material/Alert";

function AlertError({ text }) {
  return <Alert severity="error">{text}</Alert>;
}

export default AlertError;
