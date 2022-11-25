import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";

interface InputProps {
  className?: string;
  onChange?: any;
  name?: string;
  value?: any;
  label?: string;
  placeholder?: string;
  required?: boolean;
  error?: string;
  bgColor?: string;
  register?: object;
  id?: string;
  pattern?: any;
  onClick?: any;
  disabled?: boolean;
  autoComplete?: any;
  width?: any;
  minLength?: number;
  maxLength?: number;
  ifRounded?: boolean;
  showLabel?: boolean;
  readOnly?: boolean;
}

const PasswordInput = (props: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordShown = () => {
    setShowPassword(!showPassword);
  };

  const {
    placeholder,
    className,
    name,
    id,
    error,
    label,
    readOnly,
    register,
    showLabel,
  } = props;
  return (
    <div className={`relative ${className}`}>
      <i
        className="w-5 absolute z-30 cursor-pointer md:mt-1 ml-[89%]"
        onClick={togglePasswordShown}
      >
        {showPassword ? (
          <FontAwesomeIcon icon={faEye} />
        ) : (
          <FontAwesomeIcon icon={faEyeSlash} />
        )}
      </i>

      {showLabel && (
        <label
          htmlFor={name}
          className="text-sm md:text-base font-normal text-grey pb-2 inline-block"
        >
          {label}
        </label>
      )}
      <input
        readOnly={readOnly}
        type={showPassword ? "text" : "password"}
        name={name}
        id={id}
        {...register}
        placeholder={placeholder}
        className="h-[34px] placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-lightBlack rounded-md px-[6px] shadow-sm focus:outline-none focus:border-primary focus:ring-primary focus:ring-1 text-sm"
        style={{
          border: error ? "1px solid red" : "",
          backgroundColor: readOnly ? "hsl(0, 0%, 90%)" : "",
          //   borderRadius: ifRounded && "6px",
        }}
      />
      <span>
        <p className="text-red-500 mt-3 text-sm">{error}</p>
      </span>
    </div>
  );
};

export { PasswordInput };
