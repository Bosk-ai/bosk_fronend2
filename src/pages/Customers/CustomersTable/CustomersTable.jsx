import { useState } from "react";
import { StyledCustomersTable } from "../../../constats/styles";
import { Table } from "../../../components/Table/Table";
import { CustomersRow } from "./CustomersRow";

export const CustomersTable = ({
  customers,
  onEditCustomer,
  onDeleteCustomer,
}) => {
  const [sortBy, setSortBy] = useState(null);
  const [sortDesc, setSortDesc] = useState(false);

  const handleSortTable = (column) => {
    const sortDescStatus = sortBy === column ? !sortDesc : false;
    setSortBy(column);
    setSortDesc(sortDescStatus);
  };

  const handleDeleteCustomer = (customerId) => {
    onDeleteCustomer(customerId);
  };

  return (
    <StyledCustomersTable>
      <Table
        columns={[
          {
            title: "Name",
            onClick: () => handleSortTable("name"),
            active: sortBy === "name",
            arrow: sortDesc,
          },
          {
            title: "Email",
            onClick: () => handleSortTable("role_id"),
            active: sortBy === "role_id",
            arrow: sortDesc,
          },
          {
            title: "Phone",
            onClick: () => handleSortTable("email"),
            active: sortBy === "email",
            arrow: sortDesc,
            className: "phone-column",
          },
          {
            title: "Balance / Overdue",
            onClick: () => handleSortTable("updated_at"),
            active: sortBy === "updated_at",
            arrow: sortDesc,
            className: "balance-coumn",
          },
          { title: "Actions", className: "actions-coumn" },
        ]}
      >
        {customers &&
          customers.map((customer, i) => (
            <CustomersRow
              key={i}
              id={customer.id}
              name={customer.client_name}
              email={customer.email}
              phone={customer.phone}
              onEditCustomer={() => onEditCustomer(customer)}
              onDeleteCustomer={() => handleDeleteCustomer(customer.id)}
            />
          ))}
      </Table>
    </StyledCustomersTable>
  );
};
