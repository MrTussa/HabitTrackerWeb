import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { IconButton, Badge, Menu, ButtonGroup } from "@mui/material";
import { styled } from "@mui/material/styles";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";

import { acceptFriendRequest } from "../store/communityActions";
import { addFriendHandler } from "../store/communitySlice";

import ProfileButton from "./ProfileButton";

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
  const dispatch = useDispatch();

  const { notifications } = useSelector((state) => state.community);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const addFriendClick = (notifId, userDetails) => {
    dispatch(
      acceptFriendRequest({ notifId: notifId, friendId: userDetails.userId })
    );
    dispatch(addFriendHandler(userDetails));
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        {notifications.length !== 0 ? (
          <StyledBadge variant="dot" color="orange">
            <NotificationsIcon />
          </StyledBadge>
        ) : (
          <NotificationsIcon />
        )}
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: 48 * 4.5,
            width: "30ch",
          },
        }}
      >
        {notifications.map((notif) => {
          if (notif.type === "friendRequest") {
            return (
              <div
                key={notif._id}
                className="p-2 flex flex-row justify-between"
              >
                <div className="flex flex-row items-center gap-2">
                  <ProfileButton userId={notif.message.userDetails.userId} />
                  <div className="flex flex-col">
                    <span className="font-semibold leading-4">
                      {notif.message.userDetails.firstname}
                    </span>
                    <span className="leading-4">{notif.message.text}</span>
                  </div>
                </div>
                <div>
                  <IconButton color="error">
                    <PersonRemoveIcon />
                  </IconButton>
                  <IconButton
                    onClick={() =>
                      addFriendClick(notif._id, notif.message.userDetails)
                    }
                    color="success"
                  >
                    <PersonAddIcon />
                  </IconButton>
                </div>
              </div>
            );
          }
        })}
        {notifications.length === 0 && (
          <p className="p-2">You have no messages</p>
        )}
      </Menu>
    </div>
  );
};

export default NotificationButton;
