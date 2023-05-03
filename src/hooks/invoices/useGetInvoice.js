import axios from "axios";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { hostname } from "../../api/hostname";
import { headers } from "../../api/instance";
import { INVOICE } from "../../constats/types";

const useGetInvoice = () => {
  const { invoiceId } = useParams();

  const { data: invoice = null } = useQuery(
    [INVOICE],
    async () =>
      (
        await axios.get(`${hostname}/invoices/${invoiceId}`, {
          headers: headers(),
        })
      )?.data,
    { refetchOnWindowFocus: false }
  );

  return { invoice };
};

export default useGetInvoice;
