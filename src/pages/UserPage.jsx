import React, { useState } from "react";
import Container from "../components/Container";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import { Avatar, Button, CircularProgress } from "@mui/material";

const UserPage = () => {
  let { userId } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { userToken } = useSelector((state) => state.auth);
  const backendURL = import.meta.env.VITE_BASE_URL;

  const fetchUser = async () => {
    try {
      const config = {
        headers: {
          Authorization: userToken,
        },
      };

      const response = await axios.get(`${backendURL}/api/community/user`, {
        params: { userId },
        ...config,
      });
      setUser(response.data);
      setLoading(false);
      return;
    } catch (error) {
      setError(error);
    }
  };
  useEffect(() => {
    fetchUser();
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
          <div className="pt-5 pb-4 mb-11 bg-white rounded-card shadow-card">
            <div className="flex flex-row gap-3 px-4 pb-3 ">
              <Avatar sx={{ bgcolor: "#F97316" }} src="/male_avatar.png">
                Prof
              </Avatar>
              <div className="text-left">
                <div className="font-bold ">
                  {user.firstname} {user.lastname}
                </div>
                <div className="text-slate-400">Name</div>
              </div>
              <div className="text-left">
                <div className="font-bold ">{user.email}</div>
                <div className="text-slate-400">Email</div>
              </div>
            </div>
            <div className="py-4 px-4 mb-3 border-t border-b border-slate-200">
              <div>
                <div className="text-slate-400">Tasks completed this week</div>
                <div className="font-extrabold text-2xl text-orange">
                  {user.completedHabits}
                </div>
              </div>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
};

export default UserPage;
