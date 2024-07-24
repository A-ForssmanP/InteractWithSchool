import { Card, TextField, Button, Box } from "@mui/material";
import { useTheme } from "@emotion/react";
import { useEffect, useState } from "react";
import axios from "axios";
import AlertSuccess from "../alertSuccess/AlertSuccess";
import AlertError from "../alertError/AlertError";

function DashBoardNotesTextField({ handleClose }) {
  const [text, setText] = useState("");
  const [saveBtnDisabled, setSaveBtnDisabled] = useState(true);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const theme = useTheme();

  const fetchUrl = `${import.meta.env.VITE_EXPRESS_SERVER}/notes`;

  useEffect(() => {
    getNotes();
  }, []);

  // get notes data
  const getNotes = async () => {
    try {
      const res = await axios.get(fetchUrl);
      setText(res.data);
    } catch (err) {
      setText(err.message);
    }
  };

  // send note to server
  const sendNote = async () => {
    try {
      const res = await axios.put(fetchUrl, { updatedText: text });
      if (res.status === 200) {
        setShowSuccess(true);
        setTimeout(() => {
          setShowSuccess(false);
        }, 2500);
      }
    } catch (err) {
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 3000);
      throw new Error(err.message);
    }
  };

  // handle text input change
  const handleTextChange = (e) => {
    setText(e.target.value);
    setSaveBtnDisabled(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaveBtnDisabled(true);
    await sendNote();
  };

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
      <Box component={"form"} onSubmit={handleSubmit}>
        <TextField
          multiline
          name="notes-textField"
          // defaultValue="Default Values"
          value={text}
          label="Mina Anteckningar"
          id="Mina Anteckningar"
          rows={12}
          onChange={handleTextChange}
          sx={{
            width: "100%",
            marginTop: 1,
            // backgroundColor: "#ffe0b2",
            // "&focus": "{ backgroundColor: red }",
          }}
          // inputProps={{ style: { "&:focus": "{ border: red }" } }}
        />
        <Box display={"flex"} gap={1} bgcolor={theme.palette.primary.light}>
          <Button
            variant="contained"
            type="submit"
            disabled={saveBtnDisabled}
            sx={{ color: "white" }}
          >
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
      {showSuccess && (
        <div>
          <AlertSuccess text={"Sparad!"} />
        </div>
      )}
      {showError && (
        <div>
          <AlertError text={"Ops!..Något gick fel.Försök igen!"} />
        </div>
      )}
    </Card>
  );
}

export default DashBoardNotesTextField;
