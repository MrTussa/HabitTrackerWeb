import React from "react";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchUser } from "../store/communityActions";

import { Avatar } from "@mui/material";
const Profile = () => {
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector((state) => state.community);
  const { firstname, lastname, email, completedHabits } = user;
  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  return (
    <div className="bg-slate-100 w-full flex items-center h-[100dvh]">
      <Container>
        <div className="py-5 bg-white rounded-card shadow-card">
          <div className="flex flex-row gap-3 px-4 pb-3 ">
            <Avatar>Prof</Avatar>
            <div className="text-left">
              <div className="font-bold ">
                {firstname} {lastname}
              </div>
              <div className="text-slate-400">Name</div>
            </div>
          </div>
          <div className="py-4 px-4  border-t border-b border-slate-200">
            <div>
              <div className="text-slate-400">Tasks completed this week</div>
              <div className="font-extrabold text-2xl">{completedHabits}</div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Profile;
