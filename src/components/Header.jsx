import React from "react";
import Logo from "./Logo";
import ProfileButton from "./ProfileButton";

const Header = () => {
  return (
    <div className="flex justify-between py-6 px-9 bg-white w-[100dvw]">
      <Logo />
      <ProfileButton />
    </div>
  );
};

export default Header;
