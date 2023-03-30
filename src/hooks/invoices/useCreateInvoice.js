import axios from "axios";
import { hostname } from "../../api/hostname";
import { headers } from "../../api/instance";


const useCreateInvoice = () => {

  const handleCreateInvoice = (data) => {
    return axios.post(`${hostname}/invoices`, data, { headers: headers() })
      .then(resp => resp)
      .catch(error => error)
  }

  return {
    createInvoice: handleCreateInvoice
  }
}

export default useCreateInvoice;