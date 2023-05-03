import { useState } from "react";
import { Table } from "../../../components/Table/Table";
import { InvoicesRow } from "./InvoicesRow";
import { StyledInvoiceTable } from "../../../constats/styles";

export const InvoicesTable = ({ invoices, onDelete, onChangeStatus }) => {
  const [sortBy, setSortBy] = useState(null);
  const [sortDesc, setSortDesc] = useState(false);

  const handleSortTable = (column) => {
    const sortDescStatus = sortBy === column ? !sortDesc : false;
    setSortBy(column);
    setSortDesc(sortDescStatus);
  };

  return (
    <StyledInvoiceTable>
      <Table
        columns={[
          {
            title: "Billing date",
            onClick: () => handleSortTable("billing_date"),
            active: sortBy === "billing_date",
            arrow: sortDesc,
          },
          {
            title: "Status",
            onClick: () => handleSortTable("name"),
            active: sortBy === "name",
            arrow: sortDesc,
          },
          {
            title: "Number",
            onClick: () => handleSortTable("email"),
            active: sortBy === "email",
            arrow: sortDesc,
          },
          {
            title: "Customer",
            onClick: () => handleSortTable("updated_at"),
            active: sortBy === "updated_at",
            arrow: sortDesc,
          },
          {
            title: "Amount",
            onClick: () => handleSortTable("updated_ats"),
            active: sortBy === "updated_ats",
            arrow: sortDesc,
          },
          { title: "Actions", className: "actionsColumn" },
        ]}
      >
        {invoices &&
          invoices.map(
            (
              { due_date, number, status, total, id, customer, overdue_days },
              i
            ) => (
              <InvoicesRow
                key={i}
                status={status.toLowerCase() ?? ""}
                dueDate={due_date}
                number={number}
                total={total}
                onDelete={() => onDelete(id)}
                id={id}
                customerName={customer?.client_name}
                onChangeStatus={onChangeStatus}
                overdue_days={overdue_days}
              />
            )
          )}
      </Table>
    </StyledInvoiceTable>
  );
};
