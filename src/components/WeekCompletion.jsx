import CircularProgress, {
  circularProgressClasses,
} from "@mui/material/CircularProgress";

function WeekCompletion({ weekCompletion }, props) {
  const dateDisplay = (date, index) => {
    if (index === 6) {
      return "Today";
    }
    if (index % 2 === 0) {
      return date;
    }
  };
  return (
    <div className="relative flex flex-row gap-2">
      {weekCompletion.map(({ completed, habits, date }, index) => (
        <div key={index}>
          <div className="relative">
            <CircularProgress
              variant="determinate"
              sx={{
                color: (theme) =>
                  theme.palette.grey[
                    theme.palette.mode === "light" ? 200 : 800
                  ],
              }}
              size={45}
              thickness={4}
              {...props}
              value={100}
            />
            <CircularProgress
              variant="determinate"
              disableShrink
              sx={{
                color: index !== 6 ? "#573353" : "#F97316",
                position: "absolute",
                left: 0,
                [`& .${circularProgressClasses.circle}`]: {
                  strokeLinecap: "round",
                },
              }}
              size={45}
              thickness={4}
              value={(completed / habits) * 100}
            />
            <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center h-[45px] text-[#573353]">
              {completed}/{habits}
            </div>
          </div>
          <div className="text-slate-400">{dateDisplay(date, index)}</div>
        </div>
      ))}
    </div>
  );
}

export default WeekCompletion;
