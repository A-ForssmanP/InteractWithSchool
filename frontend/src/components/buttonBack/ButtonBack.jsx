import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function ButtonBack() {
  return (
    <Button
      sx={{ fontSize: 12 }}
      size="small"
      variant="contained"
      endIcon={<ArrowBackIcon />}
    >
      Tillbaka
    </Button>
  );
}

export default ButtonBack;
