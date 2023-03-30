import { useEffect } from "react";
import { useState } from "react";
import userIcon from "../../../../assets/images/user-plus.svg";
import { StyledEmptyCustomer } from "../../../../constats/styles";
import useGetCustomers from "../../../../hooks/customers/useGetCustomers";
import { Searching } from "./Searching";

export const Empty = ({ data, onUpdateData, errors }) => {
  const [searching, setSearching] = useState(data.customer_id);
  const [customers, setCustomers] = useState([]);
  const { getCustomers } = useGetCustomers();

  const handleGetCustomers = () => {
    getCustomers(1, 10000)
      .then(resp => setCustomers(resp.data.map(({ client_name, id }) => ({ title: client_name, value: id }))))
  }

  useEffect(() => {
    handleGetCustomers()
  }, [])

  useEffect(() => {
    setSearching(data.customer_id)
  }, [data.customer_id])

  return (
    <>
      {
        searching
          ? <Searching
            customers={customers}
            selectedCustomer={data.customer_id}
            onUpdateData={onUpdateData}
            onRefreshCustomersData={handleGetCustomers}
            error={errors.includes("customer_id")}
          />
          : <StyledEmptyCustomer onClick={() => setSearching(true)} error={errors.includes("customer_id")}>
            <div className="icon">
              <img src={userIcon} alt="" />
            </div>
            <div className="text">Add a customer</div>
          </StyledEmptyCustomer>
      }
    </>
  )
}

