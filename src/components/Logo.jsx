import React from "react";

import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to={"/"}>
      <h1 className="text-orange font-extrabold text-lg leading-10">
        Habit Tracker
      </h1>
    </Link>
  );
};

export default Logo;
