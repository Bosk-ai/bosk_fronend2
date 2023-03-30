import arrowIcon from "../../assets/images/arrow.svg";
import { StyledInputSelect } from "../../constats/styles";
import { Dropdown } from "../Dropdown";

export const Select = ({ options, value, onSelect, right }) => {
  return (
    <StyledInputSelect right={right}>
      {options?.find(opt => opt.value === value)?.title ?? ""}
      <img src={arrowIcon} alt="" />
      <Dropdown
        options={options}
        onSelectOption={onSelect}
      />
    </StyledInputSelect>
  )
}

