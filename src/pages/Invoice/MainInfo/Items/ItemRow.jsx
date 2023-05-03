import { Input } from "../../../../components/Input/Input";
import deleteIcon from "../../../../assets/images/delete.svg";
import { StyledItemRow } from "../../../../constats/styles";

export const ItemRow = ({
  name,
  quantity,
  price,
  amount,
  onChange,
  onDelete,
}) => (
  <StyledItemRow>
    <td>
      <Input
        value={name}
        onChange={(value) => onChange("name", value)}
        placeholder="Enter item description"
      />
    </td>
    <td>
      <Input
        value={quantity}
        onChange={(value) => onChange("quantity", value)}
        placeholder="1"
        type="number"
      />
    </td>
    <td>
      <Input
        value={price}
        onChange={(value) => onChange("price", value)}
        placeholder="0.00"
        type="number"
      />
    </td>
    <td>
      <b>€${amount}</b>
    </td>
    <td>
      <img src={deleteIcon} alt="" className="delete-btn" onClick={onDelete} />
    </td>
  </StyledItemRow>
);
