import * as React from "react";
import dayjs from "dayjs";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import "../StylesGeneral/index.styles.css";

function ViewsDatePicker({ field, dateValue, setFieldValue}) {
  const [value, setValue] = React.useState(dayjs(dateValue));

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={3}>
        <DatePicker
          inputFormat="DD/MM/YYYY"
          views={["day", "month", "year"]}
          value={value}
          onChange={(newValue) => {
            setFieldValue(field, newValue, true)
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} helperText={null} />}
        />
      </Stack>
    </LocalizationProvider>
  );
}

export default ViewsDatePicker;
