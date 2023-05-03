import { StyledInvoiceStatusDropdown } from "../../constats/styles";
import { StatusCard } from "./StatusCard";
import { STATUSES_NAMES } from "./statuses";
import selectedIcon from "../../assets/images/selected.svg";

export const Dropdown = ({ activeStatus, onChange }) => (
  <StyledInvoiceStatusDropdown>
    {STATUSES_NAMES.map((status, i) => (
      <div key={i} className="status-option" onClick={() => onChange(status)}>
        <StatusCard status={status} />
        {activeStatus === status && <img src={selectedIcon} alt="" />}
      </div>
    ))}
  </StyledInvoiceStatusDropdown>
);
