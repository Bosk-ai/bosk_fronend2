import axios from "axios";
import { hostname } from "../../api/hostname";
import { headers } from "../../api/instance";


const useDeleteInvoice = () => {

  const handleDeleteInvoice = (id) => {
    return axios.delete(`${hostname}/invoices/${id}`, { headers: headers() })
      .then(resp => resp)
      .catch(error => error)
  }

  return {
    deleteInvoice: handleDeleteInvoice
  }
}

export default useDeleteInvoice;