import React from "react";
import { Card } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
const HabitCard = ({ habitId, reminder, day, habitName }) => {
  return (
    <Card className="!shadow-card items-center relative grid grid-cols-4 !rounded-card px-4 ">
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
