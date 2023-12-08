import React, { useState } from "react";
import { TextField, Button, CardActions, CardContent } from "@mui/material";
import { motion } from "framer-motion";

import { fadeIn } from "../utils/motion";

const Register = ({ authHandler, toggleForm, error }) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
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

    // Additional validation for other fields if needed

    if (email && password) {
      authHandler({ firstname, lastname, email, password });
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
          className="flex flex-row justify-between"
        >
          <label className="w-[45%]">
            Firstname
            <div>
              <TextField
                size="small"
                onChange={(e) => setFirstname(e.target.value)}
                required
                variant="outlined"
                color="orange"
                type="text"
                fullWidth
              />
            </div>
          </label>
          <label className="w-[45%]">
            Lastname
            <div>
              <TextField
                size="small"
                onChange={(e) => setLastname(e.target.value)}
                required
                variant="outlined"
                color="orange"
                type="text"
                fullWidth
              />
            </div>
          </label>
        </motion.div>
        <motion.div
          variants={fadeIn("right", "spring", 0.3, 1)}
          initial="hidden"
          animate="show"
        >
          E-Mail
          <TextField
            size="small"
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
          variants={fadeIn("right", "spring", 0.6, 1)}
          initial="hidden"
          animate="show"
        >
          Password
          <TextField
            size="small"
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
        variants={fadeIn("right", "spring", 0.9, 1)}
        initial="hidden"
        animate="show"
      >
        <CardActions className=" flex justify-between !p-4">
          <Button variant="outlined" color="orange" type="submit">
            Register
          </Button>

          <small>
            Already have an account?{" "}
            <span
              onClick={toggleForm}
              to="/register"
              className="text-orange cursor-pointer"
            >
              Login
            </span>
          </small>
        </CardActions>
      </motion.div>
    </form>
  );
};

export default Register;
