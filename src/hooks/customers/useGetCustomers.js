import axios from "axios";
import { useQuery } from "react-query";
import { hostname } from "../../api/hostname";
import { headers } from "../../api/instance";
import { CUSTOMERS } from "../../constats/types";


const useGetCustomers = () => {

  const { data: customers = null } = useQuery(
    [CUSTOMERS],
    async () => (await axios.get(`${hostname}/customers`, { headers: headers() })),
  );

  return { customers }
}

export default useGetCustomers;