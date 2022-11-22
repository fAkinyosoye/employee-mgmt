import { useController } from "react-hook-form";
import Select from "react-select";
import { colourStyles } from "../utilities/helper";

const CustomSelect = ({
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
  className,
}: any) => {
  const { field } = useController({ name, control, rules });

  return (
    <div className={`${className}`}>
      <label className="text-sm font-normal text-blueTwo">{label}</label>
      <Select
        options={options}
        onChange={(val: any) => {
          customOnChange && customOnChange(val);
          isMulti
            ? // onchange for react-select multi options
              field.onChange(val.map((val: any) => val.value))
            : field.onChange(val.value);
        }}
        isLoading={isLoading}
        placeholder={placeholder}
        isMulti={isMulti}
        styles={colourStyles}
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
