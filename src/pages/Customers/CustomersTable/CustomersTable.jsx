import { useState } from "react"
import styled from "styled-components";
import { Table } from "../../../components/Table/Table"
import { CustomersRow } from "./CustomersRow";

export const CustomersTable = ({ onEditCustomer }) => {
  const [sortBy, setSortBy] = useState(null);
  const [sortDesc, setSortDesc] = useState(false);

  const handleSortTable = (column) => {
    const sortDescStatus = sortBy === column ? !sortDesc : false;
    setSortBy(column);
    setSortDesc(sortDescStatus)
  }

  return (
    <StyledCustomersTable>
      <Table
        columns={[
          {
            title: "Name",
            onClick: () => handleSortTable("name"),
            active: sortBy === "name",
            arrow: sortDesc
          },
          {
            title: "Email",
            onClick: () => handleSortTable("role_id"),
            active: sortBy === "role_id",
            arrow: sortDesc
          },
          {
            title: "Phone",
            onClick: () => handleSortTable("email"),
            active: sortBy === "email",
            arrow: sortDesc,
            className: "phone-column"
          },
          {
            title: "Balance / Overdue",
            onClick: () => handleSortTable("updated_at"),
            active: sortBy === "updated_at",
            arrow: sortDesc,
            className: "balance-coumn"
          },
          { title: "Actions", className: "actions-coumn" },
        ]}
      >
        <CustomersRow onEditCustomer={onEditCustomer} />
        <CustomersRow onEditCustomer={onEditCustomer} />
        <CustomersRow onEditCustomer={onEditCustomer} />
        <CustomersRow onEditCustomer={onEditCustomer} />
        <CustomersRow onEditCustomer={onEditCustomer} />
        <CustomersRow onEditCustomer={onEditCustomer} />
      </Table>
    </StyledCustomersTable>

  )
}

const StyledCustomersTable = styled.div`
  .phone-column {
    width: 30%;
  }
  .actions-coumn {
    width: 100px;
  }
`