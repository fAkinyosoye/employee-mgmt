import React from "react";

const Button = ({
  ifIcon,
  icon,
  text,
  bgColor = "rgba(7, 199, 39, 0.7)",
  className,
  paddingY = "3",
  paddingX = "4",
  onClick,
  isLoading,
}: any) => {
  return (
    <button
      className={`flex whitespace-nowrap items-center text-green-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-${paddingX} py-${paddingY} mr-2 mb-2 focus:outline-none ${className}`}
      style={{
        backgroundColor: bgColor,
      }}
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
        <span className="text-red-900">{text}</span>
      )}
    </button>
  );
};

export { Button };
