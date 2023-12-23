import React, { useEffect, useState } from "react";

import Header from "../components/Header";
import HabitCard from "../components/HabitCard";
import Container from "../components/Container";
import AddHabitCard from "../components/AddHabitCard";
import HabitsChart from "../components/HabitsChart";
import Calendar from "../components/Calendar";
import FriendList from "../components/FriendList";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

import { useDispatch, useSelector } from "react-redux";
import { fetchHabits, fetchMonthHabits } from "../store/habitActions";

function MainPage() {
  const dispatch = useDispatch();
  const { userToken } = useSelector((state) => state.auth);
  const { habits, loading, error } = useSelector((state) => state.habit);

  useEffect(() => {
    if (userToken) {
      dispatch(fetchHabits());
      dispatch(fetchMonthHabits());
    }
  }, [dispatch, userToken]);

  return (
    <div className="bg-slate-100">
      <div className="mb-8">
        <Header />
      </div>
      <Container className={"flex flex-row justify-between bg-slate-100"}>
        <div className="w-full">
          <div className="flex flex-row justify-between gap-2">
            <motion.div
              variants={fadeIn("right", "spring", 0.3, 1)}
              initial="hidden"
              animate="show"
            >
              <Calendar />
            </motion.div>
            <motion.div
              variants={fadeIn("left", "spring", 0.3, 1)}
              initial="hidden"
              animate="show"
              className="w-[60%]"
            >
              <HabitsChart />
            </motion.div>
          </div>
          <div className=" px-4 grid grid-cols-4">
            <div className="text-left">Habit name</div>
            <div>Days</div>
            <div>Reminder</div>
            <div className="text-right">Completion</div>
          </div>
          <div className="flex flex-col gap-3">
            {loading && <p className="min-h-[53px]">Loading...</p>}
            {error && <p>Error: {error}</p>}
            {habits.length > 0 ? (
              habits.map((habit, index) => (
                <motion.div
                  variants={fadeIn("left", "spring", index * 0.3, 1)}
                  initial="hidden"
                  animate="show"
                >
                  <HabitCard {...habit} key={index} />
                </motion.div>
              ))
            ) : !loading || error ? (
              <p className="min-h-[53px]">
                There are no habits yet! Try add one
              </p>
            ) : (
              ""
            )}
            <AddHabitCard />
          </div>
        </div>
        <div className="w-[35%] ml-8">
          <FriendList />
        </div>
      </Container>
    </div>
  );
}

export default MainPage;
