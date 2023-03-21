import styled from "styled-components"
import arrowIcon from "../../assets/images/arrow.svg";
import { Dropdown } from "../Dropdown";

export const Select = ({
  value,
  onChange,
  options,
  label,
  placeholder = "",
  className,
  disabled,
}) => {
  return (
    <StyledSelect className={className}>
      {label && <div className="label">{label}</div>}
      <button className="select-wrapper">
        <div className={`value ${!value && "placeholder"}`}>{value ? value.title : placeholder ? placeholder : ""}</div>
        <img src={arrowIcon} alt="" />
        <Dropdown
          options={options}
          onSelectOption={onChange}
        />
      </button>
    </StyledSelect>
  )
}

const StyledSelect = styled.div`
  .label {
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #344054;
  margin-bottom: 6px;
  }
 .select-wrapper {
  display: flex;
  align-items: center;
  padding: 10px 14px;
  height: 44px;
  background: #FFFFFF;
  border: 1px solid #D0D5DD;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 8px;
  width: 100%;
  position: relative;
  .placeholder {
    color: #667085;
  }
  .value {
    width: 100%;
    text-align: left;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #101828;
  }
  &:focus {
    img {
      transform: rotate(180deg);
    }
  }
  &:focus > .dropdown {
    opacity: 1;
    visibility: visible;
  }
  .dropdown {
    width: 100%;
  }
 }
`