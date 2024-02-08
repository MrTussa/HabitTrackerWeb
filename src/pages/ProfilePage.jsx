import React from "react";
import { motion } from "framer-motion";

import Container from "../components/Container";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchUser } from "../store/communityActions";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../store/authSlice";

import { Avatar, Button, CircularProgress } from "@mui/material";
import WeekCompletion from "../components/WeekCompletion";
import { fadeIn } from "../utils/motion";

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, loading, error } = useSelector((state) => state.community);
  const { firstname, lastname, email, completedHabits, weekCompletion } = user;
  const logout = () => {
    dispatch(logoutUser());
    navigate("/auth");
  };
  useEffect(() => {
    if (user) {
      dispatch(fetchUser());
    }
  }, []);

  return (
    <div className="bg-slate-100 w-full flex items-center h-[100dvh] flex-col">
      <Header />
      <Container>
        {loading && (
          <div className="m-auto">
            <CircularProgress color="orange" />
          </div>
        )}
        {!loading && (
          <motion.div
            className="min-w-[400px] pt-5 pb-4 mb-11 bg-white rounded-card shadow-card"
            variants={fadeIn("bottom", "spring", 0.2, 1)}
            initial="hidden"
            animate="show"
          >
            <div className="flex flex-row gap-3 px-4 pb-3 ">
              <Avatar sx={{ bgcolor: "#F97316" }} src="/male_avatar.png">
                Prof
              </Avatar>
              <div className="text-left">
                <div className="font-bold ">
                  {firstname} {lastname}
                </div>
                <div className="font-bold text-slate-400">{email}</div>
              </div>
            </div>
            <div className="py-4 px-4 border-t border-b border-slate-200">
              <div>
                <div className="text-slate-400">Tasks completed this week</div>
                <div className="font-extrabold text-2xl text-orange">
                  {completedHabits}
                </div>
              </div>
            </div>
            <div className="py-4 px-4 mb-3 border-b border-slate-200">
              <WeekCompletion weekCompletion={weekCompletion} />
            </div>
            <Button
              color="error"
              onClick={logout}
              size="large"
              className="!rounded-card !font-bold"
            >
              Logout
            </Button>{" "}
          </motion.div>
        )}
      </Container>
    </div>
  );
};

export default Profile;
