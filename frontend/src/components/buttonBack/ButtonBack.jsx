import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function ButtonBack({ handleClick }) {
  return (
    <Button
      sx={{ fontSize: 12 }}
      size="small"
      variant="contained"
      endIcon={<ArrowBackIcon />}
      onClick={handleClick}
    >
      Tillbaka
    </Button>
  );
}

export default ButtonBack;
