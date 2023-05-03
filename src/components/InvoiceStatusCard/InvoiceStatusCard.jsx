import { useState } from "react";
import { StyledInvoiceStatusCard } from "../../constats/styles";
import { StatusCard } from "./StatusCard";
import { Dropdown } from "./Dropdown";

export const InvoiceStatusCard = ({ status, onChangeStatus }) => {
  const [open, setOpen] = useState(false);

  return (
    <StyledInvoiceStatusCard onClick={() => setOpen(!open)}>
      <StatusCard status={status} arrow open={open} />
      {open && <Dropdown activeStatus={status} onChange={onChangeStatus} />}
    </StyledInvoiceStatusCard>
  );
};
