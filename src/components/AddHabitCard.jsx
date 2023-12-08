import { useState } from "react";
import { addHabit } from "../store/habitActions";

import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { Card, Button, Modal, Checkbox } from "@mui/material";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

const HabitCard = () => {
  const [openModal, setOpenModal] = useState(false);

  const openModalHandler = () => setOpenModal(true);
  const closeModalHandler = () => setOpenModal(false);

  const days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

  const checkDay = (day) => {
    console.log(day);
  };

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
      <Modal
        open={openModal}
        onClose={closeModalHandler}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Card className="absolute top-1/2 left-1/2 w-96 h-auto translate-x-[-50%] translate-y-[-50%] !bg-orange p-4 !rounded-card">
          <input
            type="text"
            className="rounded-card mb-2 px-4 py-2 w-full focus:outline-orange"
            placeholder="Enter habit name"
          />
          <div className="bg-white rounded-card mb-3">
            <div className="px-4 py-1 text-lg">Habit frequency</div>
            <div className="grid grid-cols-7">
              {days.map((day, key) => (
                <div className="text-center border-t border-r last:border-r-0">
                  <span className="uppercase font-light">{day}</span>
                  <Checkbox
                    className="!p-1"
                    size="large"
                    icon={<CheckCircleOutlineRoundedIcon />}
                    checkedIcon={<CheckCircleRoundedIcon color="orange" />}
                    defaultChecked
                    onChange={() => checkDay(key)}
                    key={key}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-card px-4 py-1  flex justify-between">
            <div className="flex items-center">
              <span className="text-lg mr-2">Reminder</span>
              <div className="font-extralight text-xs text-slate-500 inline">
                optional
              </div>
            </div>
            <div>ADD CLoCK</div>
          </div>
        </Card>
      </Modal>
    </div>
  );
};

export default HabitCard;
