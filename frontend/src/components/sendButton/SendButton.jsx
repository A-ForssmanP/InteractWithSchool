import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

function SendButton({ text }) {
  return (
    <Button
      variant="contained"
      type="submit"
      endIcon={<SendIcon />}
      sx={{ width: "100%" }}
    >
      {text}
    </Button>
  );
}

export default SendButton;
