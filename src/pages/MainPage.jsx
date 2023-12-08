import React from "react";

import Header from "../components/Header";
import HabitCard from "../components/HabitCard";
import Container from "../components/Container";

function MainPage() {
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
          <HabitCard />
        </div>
      </Container>
    </div>
  );
}

export default MainPage;
