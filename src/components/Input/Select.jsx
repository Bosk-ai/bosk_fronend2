import styled from "styled-components";
import arrowIcon from "../../assets/images/arrow.svg";
import { Dropdown } from "../Dropdown";

export const Select = ({ options, value, onSelect, right }) => {
  return (
    <StyledSelect right={right}>
      {value}
      <img src={arrowIcon} alt="" />
      <Dropdown
        options={options}
        onSelectOption={onSelect}
      />
    </StyledSelect>
  )
}

const StyledSelect = styled.button`
  display: flex;
  align-items: center;
  position: relative;
  padding: ${({ right }) => right ? "0 0 0 10px" : "0 10px 0 0"} !important;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #101828;
  img {
    transition: all .3s;
    margin-left: 4px;
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
`