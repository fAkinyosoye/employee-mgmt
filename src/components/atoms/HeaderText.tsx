import React from "react";

type HeaderTextProps = {
  children: string;
  className: string;
};

const HeaderText = ({ children, className }: HeaderTextProps) => {
  return <h1 className={`text-primary font-bold text-2xl ${className}`}>{children}</h1>;
};

export default HeaderText;
