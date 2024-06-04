import RangeDatePicker from "../rangeDatepicker/RangeDatePicker";
import TimePickerResponsive from "../timePickerResponsive/TimePickerResponsive";
import { Box, Stack } from "@mui/material";

function DayTimePicker() {
  return (
    <Box display={"flex"} justifyContent={"center"}>
      <Box width={"fit-content"}>
        <Stack
          spacing={4}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <RangeDatePicker />
          <Box>
            <TimePickerResponsive labelText={"FRÅN"} />
            <TimePickerResponsive labelText={"TILL"} />
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}

export default DayTimePicker;
