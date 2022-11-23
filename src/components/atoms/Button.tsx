import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { MouseEventHandler } from "react";
import styled from "styled-components";

import { Colors } from "./Colors";

type ButtonProps = {
  backBtn?: boolean;
  ifIcon?: boolean;
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
  backBtn,
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
    // focus:ring-4 focus:ring-blue-300
    <button
      className={`flex whitespace-nowrap items-center text-white  font-medium rounded-lg px-${paddingX} py-${paddingY} mr-2 mb-2 focus:outline-none w-full ${className}`}
      style={{
        backgroundColor: bgColor,
      }}
      type={type}
      onClick={onClick}
      disabled={isLoading}
    >
      {/* {ifIcon && <img src={icon} alt="cloud" className="pr-2 w-8 h-8" />} */}
      {/* {ifIcon && <FontAwesomeIcon icon={icon} />} */}
      {/* {backBtn && <FontAwesomeIcon icon={faArrowLeft} />} */}
      {/* allow font awesome icons */}
      {isLoading ? (
        <div className="w-full flex flex-row items-center justify-center">
          <svg
            className="animate-spin h-8 w-8 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            style={{ color: "white" }}
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
        <BtnText size={size}>{text}</BtnText>
      )}
    </button>
  );
};

export { Button };

const BtnText: any = styled.span`
  color: white;
  width: 100%;
  font-size: ${(props: ButtonProps) =>
    props.size === "lg" ? "1.2rem" : props.size === "sm" ? "0.875rem" : "1rem"};
`;
