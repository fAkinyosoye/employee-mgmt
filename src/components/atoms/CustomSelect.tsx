import Select from "react-select";
import { useController } from "react-hook-form";

// import { colourStyles } from "../helper/goToTop";

interface SelectProps {
  className?: string;
  onChange?: any;
  name?: string;
  isLoading?: boolean;
  options?: object;
  rules?: string;
  isMulti?: boolean;
  isOptionDisabled?: boolean;
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
  readOnly?: boolean;
  customOnChange?: Function;
}

const CustomSelect = (props: SelectProps) => {
  const {
    options,
    isLoading,
    placeholder,
    name,
    control,
    error,
    label,
    customOnChange,
    rules,
    isMulti,
    isOptionDisabled,
  } = props;
  const { field } = useController({ name, control, rules });

  return (
    <div className="mt-4">
      <label className="text-sm font-normal text-blueTwo">{label}</label>
      <Select
        options={options}
        onChange={(val) => {
          customOnChange && customOnChange(val);
          isMulti
            ? // onchange for react-select multi options
              field.onChange(val.map((val) => val.value))
            : field.onChange(val.value);
        }}
        isLoading={isLoading}
        placeholder={placeholder}
        isMulti={isMulti}
        // styles={colourStyles}
        isOptionDisabled={isOptionDisabled}
      />
      {error && (
        <span>
          <p className="text-red-500 text-sm">{error}</p>
        </span>
      )}
    </div>
  );
};

export { CustomSelect };
