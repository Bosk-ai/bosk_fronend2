import { Select } from "./Select";
import calendarIcon from "../../assets/images/calendar.svg";
import { IMaskInput } from "react-imask";
import { StyledInput } from "../../constats/styles";

export const Input = ({
  value,
  onChange,
  label,
  placeholder = "",
  className,
  type = "text",
  iconLeft,
  iconRight,
  selectLeft,
  selectValue,
  onChangeSelect,
  disabled,
  selectRight,
  textarea,
  onFocus,
  onBlur,
  mask,
  error,
  noShowInputValue,
}) => {
  return (
    <StyledInput
      className={className}
      textarea={textarea}
      calendarIcon={calendarIcon}
      error={error}
      disabled={disabled}
    >
      {label && <div className="label">{label}</div>}
      <div className="input-wrapper">
        {selectLeft && (
          <Select
            options={selectLeft}
            value={selectValue}
            onSelect={onChangeSelect}
          />
        )}
        {iconLeft && <img src={iconLeft} alt="" className="icon-left" />}
        {noShowInputValue ? (
          <input disabled />
        ) : textarea ? (
          <textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            disabled={disabled}
            onFocus={onFocus}
            onBlur={onBlur}
          />
        ) : mask ? (
          <IMaskInput
            mask={mask}
            radix="."
            unmask={true} // true|false|'typed'
            onAccept={(value) => onChange(value)}
            // value={value}
            // onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            type={type}
            disabled={disabled}
            onFocus={onFocus}
            onBlur={onBlur}
            min="0"
          />
        ) : (
          <input
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            type={type}
            disabled={disabled}
            onFocus={onFocus}
            onBlur={onBlur}
            min="0"
            autocomplete="off"
          />
        )}
        {iconRight && <img src={iconRight} alt="" className="icon-right" />}
        {selectRight && (
          <Select
            options={selectRight}
            value={selectValue}
            onSelect={onChangeSelect}
            right
          />
        )}
      </div>
      {error && <div className="error-message">{error}</div>}
    </StyledInput>
  );
};
