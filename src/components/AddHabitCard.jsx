import { useState, useEffect } from "react";
import { addHabit } from "../store/habitActions";
import { useDispatch } from "react-redux";

import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { Card, Button, Modal, Checkbox } from "@mui/material";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

const HabitCard = () => {
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);
  const [habitName, setHabitName] = useState("");
  const [selectedDays, setSelectedDays] = useState([0, 1, 2, 3, 4, 5, 6]);
  const [reminder, setReminder] = useState("");

  const openModalHandler = () => setOpenModal(true);
  const closeModalHandler = () => setOpenModal(false);

  const days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

  const checkDay = (day) => {
    // Обновлять массив выбранных дней при изменении состояния Checkbox
    console.log(selectedDays);
    setSelectedDays((prevDays) =>
      prevDays.includes(day)
        ? prevDays.filter((d) => d !== day)
        : [...prevDays, day]
    );
  };

  const addHabitHandler = () => {
    const selectedDaysToSend = selectedDays.length === 7 ? null : selectedDays;
    console.log(selectedDays);
    try {
      dispatch(addHabit({ habitName, day: selectedDaysToSend, reminder }));
      closeModalHandler();
    } catch (error) {
      // Обработка ошибок при добавлении привычки
      console.error("Error adding habit:", error);
    }
  };

  useEffect(() => {
    return () => {
      setSelectedDays([0, 1, 2, 3, 4, 5, 6]);
    };
  }, []);

  return (
    <div>
      <Card className="!shadow-card !border-2 border-orange border-dashed !rounded-card !bg-slate-200 hover:!shadow-orange">
        <Button
          onClick={openModalHandler}
          className="w-full flex items-center justify-center px-4 min-h-[53px] !bg-transparent "
        >
          <AddRoundedIcon color="orange" />
        </Button>
      </Card>
      <Modal open={openModal} onClose={closeModalHandler}>
        <Card className="absolute top-1/2 left-1/2 w-96 h-auto translate-x-[-50%] translate-y-[-50%] !bg-orange p-4 !rounded-card">
          <input
            type="text"
            className="rounded-card mb-2 px-4 py-2 w-full focus:outline-orange"
            placeholder="Enter habit name"
            onChange={(e) => setHabitName(e.target.value)}
          />
          <div className="bg-white rounded-card mb-3">
            <div className="px-4 py-1 text-lg">Habit frequency</div>
            <div className="grid grid-cols-7">
              {days.map((day, key) => (
                <div
                  key={key}
                  className="text-center border-t border-r last:border-r-0"
                >
                  <span className="uppercase font-light">{day}</span>
                  <Checkbox
                    className="!p-1"
                    size="large"
                    icon={<CheckCircleOutlineRoundedIcon />}
                    checkedIcon={<CheckCircleRoundedIcon color="orange" />}
                    defaultChecked
                    onChange={() => checkDay(key)}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-card px-4 py-1 mb-3 flex justify-between">
            <div className="flex items-center">
              <span className="text-lg mr-2">Reminder</span>
              <div className="font-extralight text-xs text-slate-500 inline">
                optional
              </div>
            </div>
            <div>ADD CLoCK</div>
          </div>
          <Button
            color="orange"
            className="w-full flex items-center justify-center !bg-white rounded-card px-4 py-1"
            onClick={addHabitHandler}
          >
            Add Habit
          </Button>
        </Card>
      </Modal>
    </div>
  );
};

export default HabitCard;
