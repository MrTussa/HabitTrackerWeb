import React, { useEffect, useState } from "react";

import Header from "../components/Header";
import HabitCard from "../components/HabitCard";
import Container from "../components/Container";
import AddHabitCard from "../components/AddHabitCard";
import HabitsChart from "../components/HabitsChart";
import Calendar from "../components/Calendar";

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
      <Header />
      <Container>
        <div>
          <div className="flex flex-row justify-between">
            <Calendar />
            <HabitsChart />
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
              habits.map((habit, index) => <HabitCard {...habit} key={index} />)
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
      </Container>
    </div>
  );
}

export default MainPage;
