import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@mui/material";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";

import FloatCircles from "../components/Circles";
import { fadeIn } from "../utils/motion";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import { userLogin } from "../store/authActions";

function AuthPage() {
  const [toggleForm, setToggleForm] = useState(false);
  const { loading, error, success } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const setToggleFormHandler = () => {
    setToggleForm(!toggleForm);
    console.log(toggleForm);
  };

  const getLogin = (data) => {
    dispatch(userLogin(data));
  };
  console.log(success);
  useEffect(() => {
    if (success) {
      navigate("/");
    }
  }, [success]);

  return (
    <div className="flex-1 justify-center items-center flex ">
      <Card className="!shadow-orange relative flex flex-row !rounded-card w-[670px]">
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
