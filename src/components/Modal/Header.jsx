import closeIcon from "../../assets/images/close.svg";
import { StyledModalHeader } from "../../constats/styles";

export const Header = ({ title, onClose }) => (
  <StyledModalHeader>
    <span>{title}</span>
    <img onClick={onClose} src={closeIcon} alt="" />
  </StyledModalHeader>
);
