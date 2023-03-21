import styled from "styled-components"
import { Input } from "../../../../components/Input/Input"
import deleteIcon from "../../../../assets/images/delete.svg";

export const ItemRow = ({ description, quantity, price, onChange, onDelete }) => (
  <StyledItemRow>
    <td>
      <Input
        value={description}
        onChange={(value) => onChange("description", value)}
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
      <b>€${Number(price) * Number(quantity)}</b>
    </td>
    <td>
      <img
        src={deleteIcon}
        alt=""
        className="delete-btn"
        onClick={onDelete}
      />
    </td>
  </StyledItemRow>
)

const StyledItemRow = styled.tr`
  .delete-btn {
    cursor: pointer;
    transition: all .3s;
    &:hover {
      opacity: .5;
    }
  }
`