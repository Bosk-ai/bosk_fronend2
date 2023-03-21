import styled from "styled-components";
import actionsIcon from "../../../assets/images/actions.svg";
import paidIcon from "../../../assets/images/paid.svg";
import { Dropdown } from "../../../components/Dropdown";

export const CustomersRow = ({ onEditCustomer }) => (
  <StyledCustomersRow>
    <td>
      Customer name 1
    </td>
    <td>
      name@domain.com
    </td>
    <td>
      +34 123 231 234
    </td>
    <td>
      <b>€1,000.00</b>
      <div>
        <b className="red">€600.00</b>
      </div>
    </td>
    <td>
      <div className="actions-wrapper">
        <div onClick={onEditCustomer} className="edit"> Edit</div>
        <button className="actions-btn" >
          <img src={actionsIcon} alt="" />
          <Dropdown
            options={[
              { title: "Create invoice", value: "test1" },
              { title: "Remove", value: "test" }
            ]}
          />
        </button>
      </div>
    </td>
  </StyledCustomersRow>
)

const StyledCustomersRow = styled.tr`
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
  .dropdown {
    width: 136px;
  }
  .edit {
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    color: #6941C6;
    cursor: pointer;
    transition: all .3s;
    &:hover {
      opacity: .5;
    }
  }
`