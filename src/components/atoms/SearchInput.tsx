import { Button } from "./Button";

interface InputProps {
  className?: string;
  onChange?: any;
  name?: string;
  value?: any;
  type: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  error?: any;
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
  // maxLength?: any;
  //   refs?: any;
  //   onKeyUp?: any;
  //   onKeyPress?: any;
  readOnly?: boolean;
}

const SearchInput = (props: InputProps) => {
  const {
    placeholder,
    className,
    type,
    name,
    id,
    error,
    label,
    bgColor = "bg-s",
    readOnly,
    register,
    ifRounded,
    showLabel,
    disabled,
  } = props;
  return (
    <div
      className={`${className} bg-white w-full border border-lightBlack rounded-md px-[6px] shadow-sm focus:outline-none focus:border-primary focus:ring-primary focus:ring-1 text-sm`}
    >
      <input
        readOnly={readOnly}
        type={type}
        name={name}
        disabled={disabled}
        id={id}
        {...register}
        placeholder={placeholder}
        className="h-[45px] placeholder:italic placeholder:text-slate-400 block "
        style={{
          border: error ? "1px solid red" : "",
          backgroundColor: readOnly ? "hsl(0, 0%, 90%)" : "",
          cursor: readOnly ? "not-allowed" : "initial",
          //   borderRadius: ifRounded && "6px",
        }}
      />

      <Button
        isLoading={false}
        text="Search"
        type="submit"
        className="py-2 w-24 ml-auto mr-4 lg:mr-12"
        size="sm"
      />
    </div>
  );
};

export { SearchInput };
