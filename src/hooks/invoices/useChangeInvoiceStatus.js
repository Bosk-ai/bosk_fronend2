import axios from "axios";
import { hostname } from "../../api/hostname";
import { headers } from "../../api/instance";

const useChangeInvoiceStatus = () => {
  const handleChangeInvoiveStatus = (id, status) => {
    return axios
      .put(`${hostname}/invoice/change_status/${id}`, null, {
        headers: headers(),
        params: { status },
      })
      .then((resp) => resp)
      .catch((error) => error);
  };

  return {
    changeInvoiceStatus: handleChangeInvoiveStatus,
  };
};

export default useChangeInvoiceStatus;
