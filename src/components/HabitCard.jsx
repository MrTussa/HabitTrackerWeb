import React from "react";

import { useDispatch } from "react-redux";

import { Card, Checkbox } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ThreeDotsMenu from "./ThreeDotsMenu";

import { deleteHabit } from "../store/habitActions";

const HabitCard = ({ _id, reminder, day, habitName }) => {
  const dispatch = useDispatch();

  const daysLength = day === "-1" ? 7 : day.length;
  const deleteHandler = () => {
    dispatch(deleteHabit({ habitId: _id }));
  };
  // TODO: сделать удаление в редусере
  return (
    <Card className="!shadow-card text-lg font-semibold group  relative grid grid-cols-4 !rounded-card px-4 items-center">
      <div className="text-left">{habitName}</div>
      <div>
        {daysLength} {daysLength === 1 ? "day" : "days"} a week
      </div>
      <div>{reminder}</div>
      <div className="flex justify-end">
        <Checkbox
          className="!mr-[17px]"
          size="large"
          icon={<CheckCircleOutlineIcon />}
          checkedIcon={<CheckCircleIcon color="success" />}
        />
      </div>
      <ThreeDotsMenu itemOnClick={deleteHandler} />
    </Card>
  );
};

export default HabitCard;
