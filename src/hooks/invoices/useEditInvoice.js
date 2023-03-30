import axios from "axios";
import { useParams } from "react-router-dom";
import { hostname } from "../../api/hostname";
import { headers } from "../../api/instance";


const useEditInvoice = () => {
  const { invoiceId } = useParams();

  const handleEditInvoice = (data) => {
    return axios.put(`${hostname}/invoices/${invoiceId}`, data, { headers: headers() })
      .then(resp => resp)
      .catch(error => error)
  }

  return {
    editInvoice: handleEditInvoice
  }
}

export default useEditInvoice;