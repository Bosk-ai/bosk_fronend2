import arrow from "../../assets/images/arrow.svg";
import { StyledToggleCardHeader } from "../../constats/styles";

export const Header = ({ title, open, onToggleOpen, innerRef }) => (
  <StyledToggleCardHeader
    onClick={onToggleOpen}
    open={open}
    className="no-select toggle-card-header"
    ref={innerRef}
  >
    <span>{title}</span>
    <img src={arrow} alt="" />
  </StyledToggleCardHeader>
);
