interface InputProps {
  className?: string;
  onChange?: any;
  name?: string;
  value?: any;
  type: string;
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
  // maxLength?: any;
  //   refs?: any;
  //   onKeyUp?: any;
  //   onKeyPress?: any;
  readOnly?: boolean;
}

const Input = (props: InputProps) => {
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
  } = props;
  return (
    <div className="mb-4">
      <label
        htmlFor={name}
        className="text-sm md:text-base font-normal text-grey pb-2 inline-block"
      >
        {label}
      </label>
      <input
        readOnly={readOnly}
        type={type}
        name={name}
        id={id}
        {...register}
        placeholder={placeholder}
        className="h-[34px] placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-lightBlack rounded-md px-[6px] py-3 shadow-sm focus:outline-none focus:border-primary focus:ring-primary focus:ring-1 text-sm"
        style={{
          border: error ? "1px solid red" : "",
          backgroundColor: readOnly ? "#ACB5BD" : "",
          //   borderRadius: ifRounded && "6px",
        }}
      />
      <span>
        <p className="text-red-500 text-xs"> {error}</p>
      </span>
    </div>
  );
};

export { Input };
