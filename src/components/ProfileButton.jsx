import React from "react";

import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";

const ProfileButton = ({ userId }) => {
  if (!userId) {
    return (
      <Link to={"/profile"}>
        <Avatar sx={{ bgcolor: "#F97316" }}>Prof</Avatar>
      </Link>
    );
  } else {
    return (
      <Link to={`/profile/${userId}`}>
        <Avatar sx={{ bgcolor: "#F97316" }}>Prof</Avatar>
      </Link>
    );
  }
};

export default ProfileButton;
