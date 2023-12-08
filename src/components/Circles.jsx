import React from "react";
import { motion } from "framer-motion";

const FloatingCircles = () => {
  const numCircles = 10;

  const generateRandomPosition = () => {
    return {
      x: getRandomNumber(0, 200),
      y: getRandomNumber(-300, -150),
    };
  };

  function getRandomNumber(min, max) {
    const randomFraction = Math.random();
    const randomNumber = min + randomFraction * (max - min);
    return Math.floor(randomNumber);
  }

  const circles = Array.from({ length: numCircles }).map((_, index) => (
    <motion.div
      key={index}
      style={{
        width: "60px",
        height: "60px",
        background:
          "radial-gradient(circle, rgba(255,231,218,1) 0%, rgba(255,125,57,1) 56%, rgba(232,102,41,1) 98%, rgba(255,255,255,0) 100%)",
        borderRadius: "50%",
        boxShadow: "0 0 5px rgba(0,0,0,0.5)",
        position: "absolute",
      }}
      initial={generateRandomPosition()}
      animate={{
        y: 340, // Move below the screen
        transition: {
          repeat: "infinity",
          duration: 6 + getRandomNumber(0, 15),
          ease: "linear",
        },
      }}
    />
  ));

  return (
    <div style={{ position: "absolute", width: "40%", height: "100%" }}>
      {circles}
    </div>
  );
};

export default FloatingCircles;
