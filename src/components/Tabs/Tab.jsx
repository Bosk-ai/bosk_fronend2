import { StyledTab } from "../../constats/styles";

export const Tab = ({ title, onSelect, active }) => (
  <StyledTab onClick={onSelect} active={active}>
    {title}
  </StyledTab>
);
