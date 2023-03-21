import { useState } from "react"
import styled from "styled-components"
import { CreateCustomer } from "../../components/CreateCustomer/CreateCustomer"
import useGetCustomers from "../../hooks/customers/useGetCustomers"
import { CustomersTable } from "./CustomersTable/CustomersTable"
import { Header } from "./Header"
import { ManageBar } from "./ManageBar"

export const Customers = () => {
  const [open, setOpen] = useState();
  const [editCustomer, setEditCustomer] = useState(null);
  const { customers } = useGetCustomers();

  const handleCloseModal = () => {
    setOpen(false);
    setEditCustomer(null);
  };
  const handleOpenModal = () => setOpen(true);

  const handleEditCustomer = (customer) => {
    setEditCustomer(customer);
    setOpen(true)
  }

  console.log(customers)
  return (
    <StyledCustomers>
      <CreateCustomer
        open={open}
        onClose={handleCloseModal}
      />
      <Header onAddCustomer={handleOpenModal} />
      <ManageBar />
      <CustomersTable onEditCustomer={handleEditCustomer} />
    </StyledCustomers>
  )
}

const StyledCustomers = styled.div`
  
`