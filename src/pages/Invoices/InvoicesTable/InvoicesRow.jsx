import cogoToast from "cogo-toast";
import actionsIcon from "../../../assets/images/actions.svg";
import { Dropdown } from "../../../components/Dropdown";
import { InvoiceStatusCard } from "../../../components/InvoiceStatusCard/InvoiceStatusCard";
import { StyledInvoicesRow } from "../../../constats/styles";
import { formatDate } from "../../../helpers/date";
import useChangeInvoiceStatus from "../../../hooks/invoices/useChangeInvoiceStatus";

export const InvoicesRow = ({
  dueDate = "",
  number = "",
  total = "",
  onDelete,
  id,
  customerName = "",
  status = "Draft",
  onChangeStatus,
  overdue_days,
}) => {
  const { changeInvoiceStatus } = useChangeInvoiceStatus();

  const handleSelectStatus = (status) => {
    changeInvoiceStatus(id, status).then((resp) => {
      if (resp.status === 200) {
        onChangeStatus(id, resp.data);
        cogoToast.success("Invoice status has been changed successfully", {
          hideAfter: 3,
          position: "top-right",
        });
      } else {
        cogoToast.error("Error, invoice status has not  been changed", {
          hideAfter: 3,
          position: "top-right",
        });
      }
    });
  };

  return (
    <StyledInvoicesRow>
      <td>
        <div> {formatDate(dueDate)}</div>
        {overdue_days > 0 ? (
          <div className="overdue">Overdue {overdue_days}d</div>
        ) : null}
      </td>
      <td>
        <InvoiceStatusCard
          status={status}
          onChangeStatus={handleSelectStatus}
        />
      </td>
      <td>{number}</td>
      <td>{customerName}</td>
      <td>
        <b>€{total}</b>
      </td>
      <td>
        <div className="actions-wrapper">
          <a href={`/#/invoice/${id}`}> View</a>
          <button className="actions-btn">
            <img src={actionsIcon} alt="" />
            <Dropdown
              onSelectOption={(opt) => opt.value === "delete" && onDelete()}
              options={[{ title: "Remove", value: "delete" }]}
            />
          </button>
        </div>
      </td>
    </StyledInvoicesRow>
  );
};
