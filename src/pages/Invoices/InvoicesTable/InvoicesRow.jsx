import actionsIcon from "../../../assets/images/actions.svg";
import paidIcon from "../../../assets/images/paid.svg";
import { Dropdown } from "../../../components/Dropdown";
import { StyledInvoicesRow } from "../../../constats/styles";
import { formatDate } from "../../../helpers/date";

export const InvoicesRow = ({
  dueDate = "",
  number = "",
  purchaserName = "",
  total = "",
  onDelete,
  id
}) => (
  <StyledInvoicesRow>
    <td>
      <div className="status">
        <img src={paidIcon} alt="" />
        Paid
      </div>
    </td>
    <td>
      {/* Dec 1, 2022 */}
      {formatDate(dueDate)}
    </td>
    <td>
      {number}
    </td>
    <td>
      {purchaserName}
    </td>
    <td>
      <b>€{total}</b>
    </td>
    <td>
      <div className="actions-wrapper">
        <a href={`/#/invoice/${id}`}> View</a>
        <button className="actions-btn" >
          <img src={actionsIcon} alt="" />
          <Dropdown
            onSelectOption={opt => opt.value === "delete" && onDelete()}
            options={[
              { title: "Remove", value: "delete" }
            ]}
          />
        </button>
      </div>
    </td>
  </StyledInvoicesRow>
)

