import { Alert } from "@mui/material";

function AlertInfo({ text }) {
  return <Alert severity="info">{text}</Alert>;
}

export default AlertInfo;
