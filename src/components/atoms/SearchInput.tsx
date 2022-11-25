import { useState } from "react";
import { Button } from "./Button";

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

const SearchInput = (props: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);

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
      <div className="flex flex-row">
        <input
          readOnly={readOnly}
          type={showPassword ? "text" : "password"}
          name={name}
          id={id}
          {...register}
          placeholder={placeholder}
          className="h-full placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-lightBlack rounded-md px-[6px] shadow-sm focus:outline-none focus:border-primary focus:ring-primary focus:ring-1 text-sm"
          style={{
            border: error ? "1px solid red" : "",
            backgroundColor: readOnly ? "hsl(0, 0%, 90%)" : "",
            //   borderRadius: ifRounded && "6px",
          }}
        />

        <Button
          isLoading={false}
          text="Search"
          type="button"
          // className="py-2 w-24 ml-auto mr-4 lg:mr-12"
          className="py-2 w-24 absolute cursor-pointer md:mt-1 ml-[89%] h-full"
          size="sm"
          // onClick={goToEmployeePage}
        />
      </div>

      <span>
        <p className="text-red-500 mt-3 text-sm">{error}</p>
      </span>
    </div>
  );
};

export { SearchInput };
