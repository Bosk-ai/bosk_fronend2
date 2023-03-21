import { useState } from "react"
import { Table } from "../../../components/Table/Table"
import { InvoicesRow } from "./InvoicesRow";

export const InvoicesTable = ({ invoices }) => {
  const [sortBy, setSortBy] = useState(null);
  const [sortDesc, setSortDesc] = useState(false);

  const handleSortTable = (column) => {
    const sortDescStatus = sortBy === column ? !sortDesc : false;
    setSortBy(column);
    setSortDesc(sortDescStatus)
  }

  return (
    <>
      <Table
        columns={[
          {
            title: "Status",
            onClick: () => handleSortTable("name"),
            active: sortBy === "name",
            arrow: sortDesc
          },
          {
            title: "Billing date",
            onClick: () => handleSortTable("role_id"),
            active: sortBy === "role_id",
            arrow: sortDesc
          },
          {
            title: "Number",
            onClick: () => handleSortTable("email"),
            active: sortBy === "email",
            arrow: sortDesc
          },
          {
            title: "Customer",
            onClick: () => handleSortTable("updated_at"),
            active: sortBy === "updated_at",
            arrow: sortDesc
          },
          {
            title: "Amount",
            onClick: () => handleSortTable("updated_ats"),
            active: sortBy === "updated_ats",
            arrow: sortDesc
          },
          { title: "Actions" },
        ]}
      >
        {
          invoices &&
          invoices.map(({ due_date, number, purchaser_name, total }, i) => (
            <InvoicesRow
              key={i}
              dueDate={due_date}
              number={number}
              purchaserName={purchaser_name}
              total={total}
            />
          ))
        }
      </Table>
    </>

  )
}