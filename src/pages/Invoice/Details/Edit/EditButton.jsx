import editIcon from "../../../../assets/images/edit.svg";
import { StyledCreateInvoiceEditDetailsEditButton } from "../../../../constats/styles";

export const EditButton = ({ onClick }) => (
  <StyledCreateInvoiceEditDetailsEditButton onClick={onClick}>
    <img src={editIcon} alt="" />
    Edit details
  </StyledCreateInvoiceEditDetailsEditButton>
)

