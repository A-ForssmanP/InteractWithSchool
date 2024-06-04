import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

function TimePickerResponsive({ labelText }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TimePicker
        defaultValue={dayjs()}
        ampm={false}
        label={labelText}
        // onClose={(e) => console.log(e)}
      />
    </LocalizationProvider>
  );
}

export default TimePickerResponsive;
