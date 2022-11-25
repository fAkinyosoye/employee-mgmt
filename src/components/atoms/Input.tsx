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
  inputHeight?: string;
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

const Input = (props: InputProps) => {
  const {
    placeholder,
    className,
    type,
    name,
    id,
    error,
    label,
    // bgColor = "bg-s",
    inputHeight,
    readOnly,
    register,
    // ifRounded,
    showLabel,
    disabled,
  } = props;
  return (
    <div className={`${className}`}>
      {showLabel && (
        <label
          htmlFor={name}
          className="text-sm md:text-base font-normal text-grey pb-2 inline-block"
        >
          {label}
        </label>
      )}

      {type === "textarea" ? (
        <textarea
          readOnly={readOnly}
          cols={10}
          rows={5}
          name={name}
          disabled={disabled}
          id={id}
          {...register}
          placeholder={placeholder}
          className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-lightBlack rounded-md px-[6px] shadow-sm focus:outline-none focus:border-primary focus:ring-primary focus:ring-1 text-sm"
          style={{
            border: error ? "1px solid red" : "",
            backgroundColor: readOnly ? "hsl(0, 0%, 90%)" : "",
            cursor: readOnly ? "not-allowed" : "initial",
            //   borderRadius: ifRounded && "6px",
          }}
        />
      ) : (
        <input
          readOnly={readOnly}
          type={type}
          name={name}
          disabled={disabled}
          id={id}
          {...register}
          placeholder={placeholder}
          className={`${
            inputHeight ?? "h-[34px]"
          } placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-lightBlack rounded-md px-[6px] shadow-sm focus:outline-none focus:border-primary focus:ring-primary focus:ring-1 text-sm`}
          style={{
            border: error ? "1px solid red" : "",
            backgroundColor: readOnly ? "hsl(0, 0%, 90%)" : "",
            cursor: readOnly ? "not-allowed" : "initial",
            //   borderRadius: ifRounded && "6px",
          }}
        />
      )}

      {error && (
        <span>
          <p className="text-red-500 mt-3 text-sm">{error}</p>
        </span>
      )}
    </div>
  );
};

export { Input };
