import React from "react";
import { LineChart } from "@mui/x-charts";
import moment from "moment";
import { useSelector } from "react-redux";
import { Card } from "@mui/material";
const HabitsChart = () => {
  const { habitCompletion } = useSelector((state) => state.habit);
  const addInitialDayData = () => {
    const currDate = moment();
    let dates = [];
    let completedCounts = [];

    for (let i = 0; i < 7; i++) {
      const date = currDate.clone().subtract(i, "days").format("YYYY-MM-DD");
      const completedCount = habitCompletion.filter(
        (item) => moment(item.date).isSame(date, "day") && item.completed
      ).length;
      dates.unshift(moment(date));
      completedCounts.unshift(completedCount);
    }
    return { dates, completedCounts };
  };
  const habitCompletionData = addInitialDayData(habitCompletion);

  return (
    <Card className="!shadow-card text-lg font-semibold relative !rounded-card items-center h-full">
      <LineChart
        xAxis={[
          {
            scaleType: "point",
            data: habitCompletionData.dates,
            id: "Years",
            valueFormatter: (date) => moment(date).format("MMM Do"),
          },
        ]}
        series={[
          {
            data: habitCompletionData.completedCounts,
            color: "#F97316",
          },
        ]}
      />
    </Card>
  );
};

export default HabitsChart;
