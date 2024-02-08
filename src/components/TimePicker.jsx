import { useState } from "react";

import { MobileTimePicker } from "@mui/x-date-pickers/MobileTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";

const TimePicker = ({ reminderHandler }) => {
  const [time, setTime] = useState(null);

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <MobileTimePicker
        className="w-[130px] h-9"
        value={time}
        onAccept={reminderHandler}
      />
    </LocalizationProvider>
  );
};

export default TimePicker;
