import React from "react";

import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";

const ProfileButton = ({ userId }) => {
  if (!userId) {
    return (
      <Link to={"/profile"}>
        <Avatar sx={{ bgcolor: "#F97316" }} src="/male_avatar.png">
          Prof
        </Avatar>
      </Link>
    );
  } else {
    return (
      <Link to={`/user/${userId}`}>
        <Avatar sx={{ bgcolor: "#F97316" }} src="/male_avatar.png">
          Prof
        </Avatar>
      </Link>
    );
  }
};

export default ProfileButton;
