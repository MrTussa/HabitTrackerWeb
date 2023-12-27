import React from "react";

import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to={"/"}>
      <img
        src="/daily-rituals-logo.png"
        alt="Daily Rituals"
        className="w-[90px]"
      />
    </Link>
  );
};

export default Logo;
