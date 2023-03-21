import styled from "styled-components"
import { Select } from "./Select"
import calendarIcon from "../../assets/images/calendar.svg";
import { IMaskInput } from 'react-imask';

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
  error
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
        {
          selectLeft &&
          <Select
            options={selectLeft}
            value={selectValue}
            onSelect={onChangeSelect}
          />
        }
        {iconLeft && <img src={iconLeft} alt="" className="icon-left" />}
        {
          textarea
            ? <textarea
              value={value}
              onChange={(e) => onChange(e.target.value)}
              placeholder={placeholder}
              disabled={disabled}
              onFocus={onFocus}
              onBlur={onBlur}
            />
            :
            mask ? <IMaskInput
              mask={mask}
              radix="."
              unmask={true} // true|false|'typed'
              onAccept={
                (value, mask) => console.log(value)
              }
              // value={value}
              // onChange={(e) => onChange(e.target.value)}
              placeholder={placeholder}
              type={type}
              disabled={disabled}
              onFocus={onFocus}
              onBlur={onBlur}
              min="0"
            />
              : <input
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                type={type}
                disabled={disabled}
                onFocus={onFocus}
                onBlur={onBlur}
                min="0"
              />
        }
        {iconRight && <img src={iconRight} alt="" className="icon-right" />}
        {
          selectRight &&
          <Select
            options={selectRight}
            value={selectValue}
            onSelect={onChangeSelect}
            right
          />
        }
      </div>
      {error && <div className="error-message">{error}</div>}
    </StyledInput>
  )
}

const StyledInput = styled.div`
  .label {
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: ${({ error }) => error ? "red" : "#344054"};
  margin-bottom: 6px;
  }
  .input-wrapper {
    display: flex;
    align-items: center;
    padding: 10px 14px;
    height: ${({ textarea }) => textarea ? 100 : 44}px;
    background: #FFFFFF;
    border: 1px solid ${({ error }) => error ? "red" : "#D0D5DD"};
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    border-radius: 8px;
    width: 100%;
    ${({ disabled }) => disabled && "opacity: 0.8; cursor: no-drop;"}
  }
  input, textarea {
    width: 100%;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: ${({ error }) => error ? "red" : "#101828"};
    ${({ disabled }) => disabled && "cursor: no-drop;"}
    &::placeholder {
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: #667085;
    }
  }
  input[type="date"]::-webkit-calendar-picker-indicator {
    color: rgba(0, 0, 0, 0);
    opacity: 1;
    display: block;
    background: url(${({ calendarIcon }) => calendarIcon}) no-repeat;
    width: 10px;
    height: 12px;
    border-width: thin;
}
  textarea {
    resize: none;
    height: 100% !important;
  }
  .icon-left {
    margin-right: 10px;
  }
  .icon-right {
    margin-left: 10px;
  }
  .error-message {
    margin-top: 10px;
    font-size: 13px;
    color: red;
    font-weight: bold;
    text-align: center;
  }
`