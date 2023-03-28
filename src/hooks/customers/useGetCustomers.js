import axios from "axios";
import { useQuery } from "react-query";
import { hostname } from "../../api/hostname";
import { headers } from "../../api/instance";
import { CUSTOMERS } from "../../constats/types";


const useGetCustomers = () => {

  const handleGetCustomers = (paginatePage = 1, paginatePer = 50) => {
    return axios.get(`${hostname}/customers`, { headers: headers(), params: { paginatePage, paginatePer } })
  }

  return {
    getCustomers: handleGetCustomers
  }
}

export default useGetCustomers;