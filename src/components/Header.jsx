import React from "react";
import Logo from "./Logo";
import ProfileButton from "./ProfileButton";
import NotificationButton from "./NotificationButton";

const Header = () => {
  return (
    <div className="flex justify-between py-6 px-9 bg-white w-[100dvw]">
      <Logo />
      <div className="flex flex-row gap-3">
        <NotificationButton />
        <ProfileButton />
      </div>
    </div>
  );
};

export default Header;
