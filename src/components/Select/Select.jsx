import arrowIcon from "../../assets/images/arrow.svg";
import { StyledSelect } from "../../constats/styles";
import { Dropdown } from "../Dropdown";

export const Select = ({
  value,
  onChange,
  options,
  label,
  placeholder = "",
  className,
  disabled,
  error,
  icon,
}) => {
  return (
    <StyledSelect className={className} error={error}>
      {label && <div className="label">{label}</div>}
      <button className="select-wrapper">
        <div className={`value ${!value && "placeholder"}`}>
          {value
            ? options.find((opt) => opt.value === value)?.title
            : placeholder
            ? placeholder
            : ""}
          {icon && <img src={icon} alt="" />}
        </div>
        <img src={arrowIcon} alt="" className="arrow" />
        <Dropdown
          options={options}
          onSelectOption={onChange}
          selected={value}
        />
      </button>
    </StyledSelect>
  );
};
