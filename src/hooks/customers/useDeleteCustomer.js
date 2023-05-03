import axios from "axios";
import { hostname } from "../../api/hostname";
import { headers } from "../../api/instance";

const useDeleteCustomer = () => {
  const handleDeleteCustomer = (customerId) => {
    return axios
      .delete(`${hostname}/customers/${customerId}`, { headers: headers() })
      .then((resp) => resp)
      .catch((error) => error);
  };

  return {
    deleteCustomer: handleDeleteCustomer,
  };
};

export default useDeleteCustomer;
