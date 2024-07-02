import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

function SendButton({ text, disabled }) {
  return (
    <Button
      variant="contained"
      type="submit"
      endIcon={<SendIcon />}
      sx={{ width: "100%" }}
      disabled={disabled}
    >
      {text}
    </Button>
  );
}

export default SendButton;
