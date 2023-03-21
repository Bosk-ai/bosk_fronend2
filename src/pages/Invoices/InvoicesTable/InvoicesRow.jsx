import styled from "styled-components";
import actionsIcon from "../../../assets/images/actions.svg";
import paidIcon from "../../../assets/images/paid.svg";
import { Dropdown } from "../../../components/Dropdown";
import { formatDate } from "../../../helpers/date";

export const InvoicesRow = ({
  dueDate = "",
  number = "",
  purchaserName = "",
  total = ""
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
        <a href="/#/create-invoice"> View</a>
        <button className="actions-btn" >
          <img src={actionsIcon} alt="" />
          <Dropdown
            options={[
              { title: "Remove", value: "test" }
            ]}
          />
        </button>
      </div>
    </td>
  </StyledInvoicesRow>
)

const StyledInvoicesRow = styled.tr`
  .status {
    display: flex;
    align-items: center;
    padding: 2px 8px 2px 6px;
    background: #ECFDF3;
    mix-blend-mode: multiply;
    border-radius: 16px;
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    text-align: center;
    color: #12B76A;
    width: max-content;
    margin: 0 auto;
    img {
      margin-right: 4px;
    }
  }
  .actions-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .actions-btn {
    margin-left: 12px;
    cursor: pointer;
    position: relative;
    &:focus {
      .dropdown {
        opacity: 1;
        visibility: visible;
      }
    }
  }
`