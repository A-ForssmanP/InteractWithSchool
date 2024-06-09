import Alert from "@mui/material/Alert";
import CheckIcon from "@mui/icons-material/Check";

function AlertSuccess({ text }) {
  return (
    <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
      {text}
    </Alert>
  );
}

export default AlertSuccess;
