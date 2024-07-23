import { Card, TextField, Button, Box } from "@mui/material";

function DashBoardNotesTextField({ handleClose }) {
  return (
    <Card
      sx={{
        border: "1px solid red",
        // opacity: 0.3,
        position: "absolute",
        top: { xs: "-4.5em", sm: "-10.5em", md: "-12em" },
        // bottom: "-3.5em",
        left: { xs: "-0.9em", sm: "6em", md: "4em" },
        right: { xs: "-0.9em", sm: "-11em", md: "-13.3em", lg: "-16em" },
        zIndex: 100,
        paddingTop: 1,
      }}
    >
      <TextField
        multiline
        name="notes-textField"
        // defaultValue="Default Values"
        label="Mina Anteckningar"
        rows={12}
        sx={{ border: "1px solid green", width: "100%" }}
      />
      <Box>
        <Button>Spara</Button>
        <Button onClick={handleClose}>Stäng</Button>
      </Box>
    </Card>
  );
}

export default DashBoardNotesTextField;
