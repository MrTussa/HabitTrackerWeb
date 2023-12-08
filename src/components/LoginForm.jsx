import React, { useState } from "react";
import { TextField, Button, CardActions, CardContent } from "@mui/material";
import { motion } from "framer-motion";

import { fadeIn } from "../utils/motion";

const Login = ({ authHandler, toggleForm, error }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();

    setEmailError(false);
    setPasswordError(false);

    if (email === "") {
      setEmailError(true);
    }
    if (password === "") {
      setPasswordError(true);
    }

    if (email && password) {
      authHandler({ email, password });
    }
  };

  return (
    <form
      autoComplete="on"
      onSubmit={handleSubmit}
      className="w-3/5 h-[21rem] flex justify-between flex-col relative text-left"
    >
      <CardContent className="flex gap-2 flex-col">
        <motion.div
          variants={fadeIn("right", "spring", 0, 1)}
          initial="hidden"
          animate="show"
        >
          E-Mail
          <TextField
            onChange={(e) => setEmail(e.target.value)}
            required
            variant="outlined"
            color="orange"
            type="email"
            fullWidth
            value={email}
            error={emailError}
          />
        </motion.div>
        <motion.div
          variants={fadeIn("right", "spring", 0.3, 1)}
          initial="hidden"
          animate="show"
        >
          Password
          <TextField
            onChange={(e) => setPassword(e.target.value)}
            required
            variant="outlined"
            color="orange"
            type="password"
            value={password}
            error={passwordError}
            fullWidth
          />
        </motion.div>
        {error && (
          <motion.p
            variants={fadeIn("right", "spring", 0.3, 1)}
            initial="hidden"
            animate="show"
            className="text-red-500"
          >
            {error}
          </motion.p>
        )}
      </CardContent>
      <motion.div
        variants={fadeIn("right", "spring", 0.6, 1)}
        initial="hidden"
        animate="show"
      >
        <CardActions className=" flex justify-between !p-4">
          <Button variant="outlined" color="orange" type="submit">
            Login
          </Button>

          <small>
            Need an account?{" "}
            <span
              onClick={toggleForm}
              to="/register"
              className="text-orange cursor-pointer"
            >
              Register
            </span>
          </small>
        </CardActions>
      </motion.div>
    </form>
  );
};

export default Login;
