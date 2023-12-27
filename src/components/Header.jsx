import React from "react";
import Logo from "./Logo";
import ProfileButton from "./ProfileButton";
import NotificationButton from "./NotificationButton";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between py-6 px-9 bg-white w-[100dvw] mb-8">
      <div className="flex flex-row gap-6">
        <Logo />
        <Link to={"/"}>
          <h2 className=" font-bold text-lg leading-10">Overview</h2>
        </Link>
        <Link to={"/community"}>
          <h2 className=" font-bold text-lg leading-10">Community</h2>
        </Link>
      </div>
      <div className="flex flex-row gap-3">
        <NotificationButton />
        <ProfileButton />
      </div>
    </div>
  );
};

export default Header;
