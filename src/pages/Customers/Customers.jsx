import { useEffect, useRef } from "react"
import { useState } from "react"
import { CreateCustomer } from "../../components/CreateCustomer/CreateCustomer"
import useGetCustomers from "../../hooks/customers/useGetCustomers"
import { CustomersTable } from "./CustomersTable/CustomersTable"
import { Header } from "./Header"
import { ManageBar } from "./ManageBar"

export const Customers = () => {
  const [open, setOpen] = useState();
  const [customers, setCustomers] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const { getCustomers } = useGetCustomers();
  const [page, setPage] = useState(1);
  const [isLastPage, setIsLastPage] = useState(false);
  const loading = useRef(false);

  useEffect(() => {
    getCustomers().then(resp => setCustomers(resp.data))
  }, [])

  const handleCloseModal = () => {
    setOpen(false);
    setSelectedCustomer(null);
  };
  const handleOpenModal = () => setOpen(true);

  const handleEditCustomer = (customer) => {
    setSelectedCustomer(customer);
    setOpen(true)
  }

  const handleAddCustomer = (customer) => setCustomers([...customers, customer]);
  const handleUpdateCustomer = (updatedCustomer) => setCustomers(customers.map(customer => (customer.id === updatedCustomer.id) ? updatedCustomer : customer));
  const handleDeleteCustomer = (customerId) => setCustomers(customers.filter(customer => customer.id !== customerId));

  const handleLoadMoreCustomers = (e) => {
    const scrolledHeight = e.target.scrollTop + e.target.clientHeight;
    const scrollHeight = e.target.scrollHeight;
    if (!loading.current && !isLastPage && ((scrolledHeight + 50) > scrollHeight)) {
      loading.current = true
      getCustomers(1 + page).then(resp => {
        const updatedCustomers = [...customers, ...resp.data];
        console.log(updatedCustomers)
        setCustomers(updatedCustomers);
        setIsLastPage(resp.data?.length === 0)
        setPage(1 + page);
        loading.current = false
      });
    }
  }

  useEffect(() => {
    document.querySelector(".pages").addEventListener("scroll", handleLoadMoreCustomers)
    return () => document.querySelector(".pages").removeEventListener("scroll", handleLoadMoreCustomers)
  }, [customers, loading])

  return (
    <div>
      <CreateCustomer
        open={open}
        onClose={handleCloseModal}
        selectedCustomer={selectedCustomer}
        onUpdateCustomer={handleUpdateCustomer}
        onCreatedCustomer={handleAddCustomer}
      />
      <Header onAddCustomer={handleOpenModal} />
      <ManageBar customersCount={customers?.length ?? 0} />
      <CustomersTable
        customers={customers}
        onEditCustomer={handleEditCustomer}
        onDeleteCustomer={handleDeleteCustomer}
      />
    </div>
  )
}
