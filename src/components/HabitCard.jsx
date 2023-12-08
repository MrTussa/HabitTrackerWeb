import React from "react";
import { Card, Checkbox } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
const HabitCard = ({ habitId, reminder, day, habitName }) => {
  return (
    <Card className="!shadow-card  relative grid grid-cols-4 !rounded-card px-4 ">
      <div className="text-left">Drink water</div>
      <div>3 days in week</div>
      <div>9:00PM</div>
      <div className="flex justify-end">
        <Checkbox
          className="!mr-[17px]"
          size="large"
          icon={<CheckCircleOutlineIcon />}
          checkedIcon={<CheckCircleIcon color="success" />}
        />
      </div>
    </Card>
  );
};

export default HabitCard;
