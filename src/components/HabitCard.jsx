import { useState } from "react";

import { useDispatch } from "react-redux";

import { Card, Checkbox } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ThreeDotsMenu from "./ThreeDotsMenu";

import { deleteHabit, markCompleted } from "../store/habitActions";
import { deleteHabitHandler } from "../store/habitSlice";

const HabitCard = ({ _id, reminder, day, habitName, completed = false }) => {
  const [isChecked, setIsChecked] = useState(completed);
  const dispatch = useDispatch();
  const daysLength = day[0] === -1 ? 7 : day.length;
  const deleteHandler = () => {
    dispatch(deleteHabit({ habitId: _id }));
    dispatch(deleteHabitHandler({ habitId: _id }));
  };
  const markHandler = () => {
    setIsChecked(!isChecked);
    dispatch(markCompleted({ habitId: _id, day: day }));
  };
  return (
    <Card className="!shadow-card text-lg font-semibold group  relative grid grid-cols-4 !rounded-card px-4 items-center">
      <div className="text-left">{habitName}</div>
      <div>
        {daysLength} {daysLength === 1 ? "day" : "days"} a week
      </div>
      <div>{reminder}</div>
      <div className="flex justify-end">
        <Checkbox
          onChange={markHandler}
          className="!mr-[17px]"
          size="large"
          icon={<CheckCircleOutlineIcon />}
          checkedIcon={<CheckCircleIcon color="success" />}
          checked={isChecked}
        />
      </div>
      <ThreeDotsMenu itemOnClick={deleteHandler} />
    </Card>
  );
};

export default HabitCard;
