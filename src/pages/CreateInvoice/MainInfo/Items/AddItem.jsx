import plusIcon from "../../../../assets/images/plus.svg";
import { StyledAddItem } from "../../../../constats/styles";

export const AddItem = ({ onAdd, border }) => (
  <StyledAddItem border={border}>
    <td>
      <div className="add-item" onClick={onAdd}>
        <img src={plusIcon} alt="" />
        Add an item
      </div>
    </td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </StyledAddItem>
)

