import React, { useEffect } from "react";

import Header from "../components/Header";
import HabitCard from "../components/HabitCard";
import Container from "../components/Container";

import { useDispatch, useSelector } from "react-redux";
import { fetchHabits } from "../store/habitActions";

function MainPage() {
  const dispatch = useDispatch();
  const { userToken } = useSelector((state) => state.auth);
  const { habits, loading, error } = useSelector((state) => state.habit);

  useEffect(() => {
    if (userToken) {
      dispatch(fetchHabits());
    }
  }, [dispatch, userToken]);

  return (
    <div className="bg-slate-100">
      <Header />
      <Container>
        <div>
          <div className=" px-4 grid grid-cols-4">
            <div className="text-left">Habit name</div>
            <div>Days</div>
            <div>Reminder</div>
            <div className="text-right">Completion</div>
          </div>
          <div>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {habits &&
              habits.map((habit, id) => {
                <HabitCard {...habit} id={id} />;
              })}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default MainPage;
