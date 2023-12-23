import React from "react";

const Container = ({ children, className }) => {
  return (
    <div className={`m-auto px-8 max-w-screen-xl ${className}`}>{children}</div>
  );
};

export default Container;
