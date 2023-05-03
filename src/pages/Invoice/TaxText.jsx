import { StyledTaxText } from "../../constats/styles";
import taxIcon from "../../assets/images/tax-icon.png";
import closeIcon from "../../assets/images/close.svg";

export const TaxText = ({ text, onClose }) => (
  <StyledTaxText>
    <img src={taxIcon} alt="" className="icon" />
    <div>{text}</div>
    <img src={closeIcon} alt="" className="close" onClick={onClose} />
  </StyledTaxText>
);
