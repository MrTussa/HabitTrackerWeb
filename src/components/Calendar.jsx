import * as React from "react";
import dayjs from "dayjs";
import moment from "moment";
import { useSelector } from "react-redux";

import { Card } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Badge from "@mui/material/Badge";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { PickersDay } from "@mui/x-date-pickers/PickersDay";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { DayCalendarSkeleton } from "@mui/x-date-pickers/DayCalendarSkeleton";

const currDate = new Date();
const initialValue = dayjs(currDate);

function ServerDay(props) {
  const { day, outsideCurrentMonth, ...other } = props;
  let days = [];
  const { habitCompletion } = useSelector((state) => state.habit);
  habitCompletion.map(({ date }) => {
    const habitDate = moment(date).date();
    days.push(habitDate);
  });
  const highlightedDays = [...new Set(days)];
  const isSelected =
    !props.outsideCurrentMonth &&
    highlightedDays.indexOf(props.day.date()) >= 0;
  return (
    <Badge
      key={props.day.toString()}
      overlap="circular"
      badgeContent={
        isSelected ? (
          <CheckCircleIcon color="orange" className="w-4 h-4" />
        ) : undefined
      }
    >
      <PickersDay
        {...other}
        outsideCurrentMonth={outsideCurrentMonth}
        day={day}
      />
    </Badge>
  );
}

export default function DateCalendarServerRequest() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [highlightedDays, setHighlightedDays] = React.useState([1, 2, 15]);

  return (
    <Card className="!shadow-card text-lg font-semibold relative   !rounded-card px-4 items-center">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar
          defaultValue={initialValue}
          loading={isLoading}
          disabled
          renderLoading={() => <DayCalendarSkeleton />}
          slots={{
            day: ServerDay,
          }}
          slotProps={{
            day: {
              highlightedDays,
            },
          }}
        />
      </LocalizationProvider>
    </Card>
  );
}
