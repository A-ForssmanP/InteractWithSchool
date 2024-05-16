import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import {
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  TextField,
} from "@mui/material";
import { useState } from "react";

function AbsenceReason({
  handleChange,
  absence,
  handleText,
  fieldIsDone,
  isDone,
  fieldIsNotDone,
}) {
  const [text, setText] = useState("");

  //handle buttonClick
  const handleClick = () => {
    if (absence.reason === "Sjukdom") {
      handleText("Hemma pga sjukdom");
      fieldIsDone("reason");
    } else if (absence.reason === "Annan" && text) {
      handleText(text);
      fieldIsDone("reason");
    }
  };

  return (
    <Box>
      <Box
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-between"}
      >
        <FormControl sx={{ minWidth: 130 }} size="small">
          <InputLabel id="reason">Anledning</InputLabel>
          <Select
            labelId="reason"
            id="reason"
            label="Reason"
            onChange={(e) => handleChange(e)}
            value={absence.reason}
            disabled={isDone}
          >
            <MenuItem value="Sjukdom">Sjukdom</MenuItem>
            <MenuItem value="Annan">Annan</MenuItem>
          </Select>
        </FormControl>
        <Box>
          {!isDone ? (
            <ErrorOutlineIcon color="disabled" />
          ) : (
            <>
              <Button onClick={() => fieldIsNotDone("reason")}>Ändra</Button>
              <CheckCircleOutlineIcon color="success" />
            </>
          )}
        </Box>
      </Box>
      {absence.reason === "Annan" && !isDone && (
        <Box>
          <TextField
            sx={{ marginTop: ".5rem" }}
            fullWidth
            id="textReason"
            label="Vänligen fyll i anledning"
            multiline
            rows={4}
            defaultValue={text}
            onChange={(e) => setText(e.target.value)}
          />
        </Box>
      )}
      {!isDone && (
        <Button
          sx={{ margin: "1rem 0" }}
          variant="contained"
          fullWidth
          color="success"
          disabled={!absence.reason}
          onClick={handleClick}
        >
          Klar
        </Button>
      )}
    </Box>
  );
}

export default AbsenceReason;
