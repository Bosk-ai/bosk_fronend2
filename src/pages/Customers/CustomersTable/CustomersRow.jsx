import { useRef } from "react";
import actionsIcon from "../../../assets/images/actions.svg";
import { Dropdown } from "../../../components/Dropdown";
import { StyledCustomersRow } from "../../../constats/styles";
import useDeleteCustomer from "../../../hooks/customers/useDeleteCustomer";
import cogoToast from 'cogo-toast';

export const CustomersRow = ({ onEditCustomer, id, name, email, phone, onDeleteCustomer }) => {
  const actionBtnRef = useRef(null);
  const { deleteCustomer } = useDeleteCustomer();

  const handleDelete = () => {
    deleteCustomer(id)
      .then(resp => {
        if (resp?.status === 200) {
          cogoToast.success("Customer has been deleted successfully", { hideAfter: 3, position: "top-right", });
          onDeleteCustomer()
        } else {
          cogoToast.error("Error, customer has not been deleted", { hideAfter: 3, position: "top-right", });
        }
      })
  }
  const handleSelectAction = (opt) => {
    actionBtnRef.current.blur();
    if (opt.value === "delete") {
      handleDelete();
    }
  }

  return (
    <StyledCustomersRow>
      <td>{name}</td>
      <td>{email}</td>
      <td>{phone}</td>
      <td>
        <b>-</b>
        {/* <div>
        <b className="red">€600.00</b>
      </div> */}
      </td>
      <td>
        <div className="actions-wrapper">
          <div onClick={onEditCustomer} className="edit"> Edit</div>
          <button className="actions-btn" ref={actionBtnRef} >
            <img src={actionsIcon} alt="" />
            <Dropdown
              onSelectOption={handleSelectAction}
              options={[
                // { title: "Create invoice", value: "test1" },
                { title: "Remove", value: "delete" }
              ]}
            />
          </button>
        </div>
      </td>
    </StyledCustomersRow>
  )
}

