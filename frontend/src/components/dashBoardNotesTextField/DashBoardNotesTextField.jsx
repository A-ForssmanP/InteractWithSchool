import { Card, TextField, Button, Box } from "@mui/material";
import { useTheme } from "@emotion/react";

function DashBoardNotesTextField({ handleClose }) {
  const theme = useTheme();
  console.log(theme);
  return (
    <Card
      sx={{
        // border: "1px solid red",
        // opacity: 0.3,
        position: "absolute",
        top: { xs: "-4.5em", sm: "-10.5em", md: "-11.5em", xl: "-12em" },
        // bottom: "-3.5em",
        left: { xs: "-0.9em", sm: "6em", md: "4em", lg: "-6em" },
        right: { xs: "-0.9em", sm: "-11em", md: "-13.3em", lg: "-5em" },
        zIndex: 100,
        backgroundColor: theme.palette.grey[50],
      }}
    >
      <Box component={"form"}>
        <TextField
          multiline
          name="notes-textField"
          // defaultValue="Default Values"
          label="Mina Anteckningar"
          id="Mina Anteckningar"
          rows={12}
          sx={{
            width: "100%",
            marginTop: 1,
            // backgroundColor: "#ffe0b2",
            // "&focus": "{ backgroundColor: red }",
          }}
          // inputProps={{ style: { "&:focus": "{ border: red }" } }}
        />
        <Box display={"flex"} gap={1} bgcolor={theme.palette.primary.light}>
          <Button variant="contained" type="submit" sx={{ color: "white" }}>
            Spara
          </Button>
          <Button
            onClick={handleClose}
            variant="contained"
            sx={{ color: "white" }}
          >
            Stäng
          </Button>
        </Box>
      </Box>
    </Card>
  );
}

export default DashBoardNotesTextField;
