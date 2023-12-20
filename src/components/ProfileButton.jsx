import React from "react";

import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";

const ProfileButton = () => {
  return (
    <Link to={"/profile"}>
      <Avatar sx={{ bgcolor: "#F97316" }}>Prof</Avatar>
    </Link>
  );
};

export default ProfileButton;
