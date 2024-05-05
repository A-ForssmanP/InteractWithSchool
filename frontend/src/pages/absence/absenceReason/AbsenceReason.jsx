import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import DoneIcon from "@mui/icons-material/Done";
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
}) {
  const [text, setText] = useState("");
  //handle buttonClick
  const handleClick = () => {
    if (absence.reason === "Sjukdom") {
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
            // value={age}
            label="Reason"
            onChange={(e) => handleChange(e)}
            value={absence.reason}
            // onChange={handleChange}
          >
            {/* <MenuItem value={10}>Ten</MenuItem> */}
            <MenuItem value="Sjukdom">Sjukdom</MenuItem>
            <MenuItem value="Annan">Annan</MenuItem>
          </Select>
        </FormControl>
        <Box>
          {!isDone ? (
            <ErrorOutlineIcon color="disabled" />
          ) : (
            <CheckCircleOutlineIcon color="success" />
          )}
        </Box>
      </Box>
      {absence.reason === "Annan" && (
        <Box>
          <TextField
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
      <Button
        variant="contained"
        fullWidth
        color="success"
        disabled={!absence.reason}
        onClick={handleClick}
      >
        Klar
      </Button>
    </Box>
  );
}

export default AbsenceReason;
