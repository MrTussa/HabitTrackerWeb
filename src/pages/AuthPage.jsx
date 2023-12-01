import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Card } from "@mui/material";
import { motion } from "framer-motion";

import FloatCircles from "../components/Circles";
import { fadeIn } from "../utils/motion";

import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
function AuthPage() {
  const [toggleForm, setToggleForm] = useState(false);

  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const navigate = useNavigate();

  const setToggleFormHandler = () => {
    setToggleForm(!toggleForm);
    console.log(toggleForm);
  };

  const getLogin = async (data) => {
    const { email, password } = data;
    try {
      const response = await axios.post(`${BASE_URL}/api/login`, {
        email: email,
        password: password,
      });
      const { token } = response.data;
      localStorage.setItem("jwtToken", token);
      navigate((to = "/"));
    } catch (error) {
      console.error("Ошибка при входе:", error.response.data.error);
    }
  };
  return (
    <div className="flex-1 justify-center items-center flex ">
      <Card className="!shadow-card relative flex flex-row !rounded-card w-[670px]">
        {toggleForm ? (
          <RegisterForm
            authHandler={getLogin}
            toggleForm={setToggleFormHandler}
          />
        ) : (
          <LoginForm authHandler={getLogin} toggleForm={setToggleFormHandler} />
        )}
        <div className="w-2/5 flex justify-center items-center bg-gradient-to-tr from-[#FEE140] to-[#FA709A] z-10  ">
          <motion.p
            variants={fadeIn("left", "spring", 0, 1)}
            initial="hidden"
            animate="show"
            className="text-xl font-bold text-white z-10"
          >
            Create habits to improve your health!
          </motion.p>
          <FloatCircles />
        </div>
      </Card>
    </div>
  );
}

export default AuthPage;
