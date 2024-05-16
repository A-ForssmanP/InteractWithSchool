import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

function AbsenceItemStudent({ student }) {
  const navigate = useNavigate();

  // naviagte to register absence for selected student
  const navigateToRegister = (id) => {
    navigate(`${id}/registrera`, {
      state: {
        student: student,
      },
    });
  };
  return (
    <Card
      sx={{
        "&:hover": { background: "rgba(0, 0, 0, 0.04)" },
        borderRadius: "6px",
        marginBottom: ".5rem",
        display: "flex",
        width: "100%",
      }}
    >
      <CardContent sx={{ width: "100%" }}>
        <Box display="flex" justifyContent={"center"} gap={"1.6rem"}>
          <Typography display={"flex"} alignItems={"center"}>
            {student.firstName}
          </Typography>
          <CardActions>
            <Button
              variant="contained"
              onClick={() => navigateToRegister(student._id)}
            >
              Välj
            </Button>
          </CardActions>
        </Box>
      </CardContent>
    </Card>
  );
}

export default AbsenceItemStudent;
