import plusIcon from "../../../../assets/images/plus.svg";
import { StyledCreateCustomerButton } from "../../../../constats/styles";

export const CreateButton = ({ onClick }) => (
  <StyledCreateCustomerButton onClick={onClick}>
    <img src={plusIcon} alt="" />
    Create new customer
  </StyledCreateCustomerButton>
);
