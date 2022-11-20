import React, { MouseEventHandler } from "react";
import styled from "styled-components";

import { Colors } from "./Colors";

type ButtonProps = {
  ifIcon?: any;
  icon?: any;
  text: string;
  bgColor?: string;
  className?: string;
  paddingY?: string;
  paddingX?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  isLoading?: boolean;
  type: "button" | "submit" | "reset" | undefined;
  size?: string;
};

const Button = ({
  ifIcon,
  icon,
  text,
  bgColor = Colors.boiGreen,
  className,
  paddingY = "3",
  paddingX = "4",
  onClick,
  isLoading,
  type,
  size,
}: ButtonProps) => {
  return (
    <button
      className={`flex whitespace-nowrap items-center text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-${paddingX} py-${paddingY} mr-2 mb-2 focus:outline-none w-full ${className}`}
      style={{
        backgroundColor: bgColor,
      }}
      type={type}
      onClick={onClick}
      disabled={isLoading}
    >
      {ifIcon && <img src={icon} alt="cloud" className="pr-2 w-5 h-5" />}
      {isLoading ? (
        <div className="flex items-center justify-center">
          <svg
            className="animate-spin h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        </div>
      ) : (
        <BtnText>{text}</BtnText>
      )}
    </button>
  );
};

export { Button };

const BtnText: any = styled.span`
  color: white;
  width: 100%;
  font-size: ${(props: ButtonProps) =>
    props.size === "lg"
      ? "var(--font-size--large)"
      : props.size === "sm"
      ? "var(--font-size--small)"
      : "var(--font-size--default)"};
`;
