import axios from "axios";
import { hostname } from "../../api/hostname";
import { headers } from "../../api/instance";


const useGetCustomersCount = () => {

  const handleGetCustomersCount = () => {
    return axios.get(`${hostname}/count_customers`, { headers: headers() })
  }

  return {
    getCustomersCount: handleGetCustomersCount
  }
}

export default useGetCustomersCount;