import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";

function AbsenceItemStudent({ student }) {
  const [isAbsence, setIsAbsence] = useState(false);
  const navigate = useNavigate();

  // check if student is absence or not
  const checkisAbsence = () => {
    const currentDate = new Date().toDateString();

    const checkForDate =
      student &&
      student.absence.prevAbsences.some((element) => {
        return element.dates.fromDate === currentDate;
      });
    setIsAbsence(checkForDate);
  };

  useEffect(() => {
    checkisAbsence();
  }, [student]);

  // naviagte to register absence for selected student
  const navigateToRegister = (id) => {
    navigate(`${id}/registrera`, {
      state: {
        student: student,
      },
    });
  };

  //navigate to the students absenceOverview
  const navigateToOverview = (id) => {
    navigate(`${id}/oversikt`, {
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
        <Typography sx={{ textAlign: "right" }}>
          {isAbsence && "Frånvaro"}
          <LightbulbOutlinedIcon
            fontSize="medium"
            color={isAbsence ? "error" : "success"}
          />
        </Typography>

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
            <Button onClick={() => navigateToOverview(student._id)}>
              Link
            </Button>
          </CardActions>
        </Box>
      </CardContent>
    </Card>
  );
}

export default AbsenceItemStudent;
