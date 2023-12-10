import React, { useState } from "react";
import { IconButton, Menu, MenuItem } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const ThreeDotsMenu = ({ itemOnClick }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const itemHandle = () => {
    itemOnClick();
    setAnchorEl(null);
  };
  return (
    <div
      className="absolute hidden group-hover:!block right-0 z-50"
      style={{ display: anchorEl ? "block" : "none" }}
    >
      <IconButton onClick={handleClick}>
        <MoreVertIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        className="group"
        onClose={handleClose}
      >
        <MenuItem onClick={itemHandle}>Delete</MenuItem>
      </Menu>
    </div>
  );
};

export default ThreeDotsMenu;
