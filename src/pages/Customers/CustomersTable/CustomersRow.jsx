import actionsIcon from "../../../assets/images/actions.svg";
import { Dropdown } from "../../../components/Dropdown";
import { StyledCustomersRow } from "../../../constats/styles";

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

