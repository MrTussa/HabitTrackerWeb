import { useState } from "react";

import { MobileTimePicker } from "@mui/x-date-pickers/MobileTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";

const TimePicker = () => {
  const [time, setTime] = useState(null);

  const timeHandler = (value) => {
    setTime(value);
    console.log(value);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <MobileTimePicker
        className="w-[130px]"
        value={time}
        onAccept={timeHandler}
      />
    </LocalizationProvider>
  );
};

export default TimePicker;
