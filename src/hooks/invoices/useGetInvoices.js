import axios from "axios";
import { hostname } from "../../api/hostname";
import { headers } from "../../api/instance";

const useGetInvoices = () => {
  const handleGetInvoices = (status, paginatePage = 1, paginatePer = 50) => {
    return axios.get(`${hostname}/invoices`, {
      headers: headers(),
      params: { status, paginatePage, paginatePer },
    });
  };

  return {
    getInvoices: handleGetInvoices,
  };
};

export default useGetInvoices;
