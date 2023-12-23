import React from "react";

import { IconButton, Badge } from "@mui/material";
import { styled } from "@mui/material/styles";
import NotificationsIcon from "@mui/icons-material/Notifications";

import { useSelector } from "react-redux";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: 6,
    top: 6,
    border: `1px solid white`,
    borderRadius: "100%",
    padding: "4px 4px",
  },
}));

const NotificationButton = () => {
  const { notifications } = useSelector((state) => state.community);

  return (
    <div>
      <IconButton>
        {notifications.length !== 0 ? (
          <StyledBadge variant="dot" color="orange">
            <NotificationsIcon />
          </StyledBadge>
        ) : (
          <NotificationsIcon />
        )}
      </IconButton>
    </div>
  );
};

export default NotificationButton;
