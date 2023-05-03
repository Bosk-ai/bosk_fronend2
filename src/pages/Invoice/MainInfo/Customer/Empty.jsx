import { useEffect } from "react";
import { useState } from "react";
import userIcon from "../../../../assets/images/user-plus.svg";
import { StyledEmptyCustomer } from "../../../../constats/styles";
import useGetCustomers from "../../../../hooks/customers/useGetCustomers";
import { Searching } from "./Searching";
import { SelectedCustomer } from "./SelectedCustomer";

export const Empty = ({ data, onUpdateData, errors, onGetAdvise }) => {
  const [searching, setSearching] = useState(false);
  const [customers, setCustomers] = useState([]);
  const { getCustomers } = useGetCustomers();
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  const toggleSearch = (value) => setSearching(value);

  const handleGetCustomers = () => {
    getCustomers(1, 10000).then((resp) => setCustomers(resp.data));
  };

  useEffect(() => {
    handleGetCustomers();
  }, []);

  useEffect(() => {
    if (data.customer_id) {
      const foundedCustomer = customers.find((c) => c.id === data.customer_id);
      setSelectedCustomer(foundedCustomer ?? null);
    }
  }, [data.customer_id, customers]);

  return (
    <>
      {searching ? (
        <Searching
          customers={customers.map(({ client_name, id, country }) => ({
            title: client_name,
            value: id,
            country,
          }))}
          selectedCustomer={data.customer_id}
          onUpdateData={onUpdateData}
          onEndSearch={() => toggleSearch(false)}
          onRefreshCustomersData={handleGetCustomers}
          error={errors.includes("customer_id")}
          onGetAdvise={onGetAdvise}
        />
      ) : selectedCustomer ? (
        <SelectedCustomer
          clientName={selectedCustomer?.client_name}
          address={selectedCustomer?.address_1}
          city={selectedCustomer?.city}
          country={selectedCustomer?.country}
          onSearch={() => toggleSearch(true)}
        />
      ) : (
        <StyledEmptyCustomer
          onClick={() => setSearching(true)}
          error={errors.includes("customer_id")}
        >
          <div className="icon">
            <img src={userIcon} alt="" />
          </div>
          <div className="text">Add a customer</div>
        </StyledEmptyCustomer>
      )}
    </>
  );
};
