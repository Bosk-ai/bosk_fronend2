import { StyledEditDetailsButton } from "../../../../../../constats/styles";
import editIcon from "../../../../assets/images/edit.svg";

export const EditButton = ({ onClick }) => (
  <StyledEditDetailsButton onClick={onClick}>
    <img src={editIcon} alt="" />
    Edit details
  </StyledEditDetailsButton>
);
