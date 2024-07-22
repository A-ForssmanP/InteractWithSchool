import { Card, TextField, Button, Box } from "@mui/material";

function DashBoardNotesTextField({ handleClose }) {
  return (
    <Card
      sx={{
        border: "1px solid red",
        // opacity: 0.3,
        position: "absolute",
        top: "-4.5em",
        // bottom: "-3.5em",
        left: "-0.9em",
        right: "-0.9em",
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
