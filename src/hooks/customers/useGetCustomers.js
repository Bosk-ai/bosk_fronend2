import axios from "axios";
import { hostname } from "../../api/hostname";
import { headers } from "../../api/instance";

const useGetCustomers = () => {
  const handleGetCustomers = (paginatePage = 1, paginatePer = 50) => {
    return axios.get(`${hostname}/customers`, {
      headers: headers(),
      params: { paginatePage, paginatePer },
    });
  };

  return {
    getCustomers: handleGetCustomers,
  };
};

export default useGetCustomers;
