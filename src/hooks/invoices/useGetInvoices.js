import axios from "axios";
import { useQuery } from "react-query";
import { hostname } from "../../api/hostname";
import { headers } from "../../api/instance";
import { INVOICES } from "../../constats/types";


const useGetInvoices = () => {

  const { data: invoices = null } = useQuery(
    [INVOICES],
    async () => (await axios.get(`${hostname}/invoices`, { headers: headers() })).data,
  );

  return { invoices }
}

export default useGetInvoices;