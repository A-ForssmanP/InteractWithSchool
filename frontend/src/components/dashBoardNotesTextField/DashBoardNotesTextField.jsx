import { Card, TextField, Button, Box } from "@mui/material";
import { useTheme } from "@emotion/react";
import { useState } from "react";
import axios from "axios";

function DashBoardNotesTextField({ handleClose }) {
  const [text, setText] = useState("");
  const theme = useTheme();

  const fetchUrl = `${import.meta.env.VITE_EXPRESS_SERVER}/notes`;

  // get notes data
  const getNotes = async () => {
    try {
      const res = await axios.get(fetchUrl);
      console.log("res", res);
    } catch (err) {
      console.log(err);
    }
  };
  getNotes();

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
          value={text}
          label="Mina Anteckningar"
          id="Mina Anteckningar"
          rows={12}
          onChange={(e) => setText(e.target.value)}
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
