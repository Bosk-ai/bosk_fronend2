import axios from "axios";
import { useQuery } from "react-query";
import { hostname } from "../../api/hostname";
import { headers } from "../../api/instance";
import { SUMMARY } from "../../constats/types";

const useGetSummary = () => {
  const { data: summary = null } = useQuery(
    [SUMMARY],
    async () =>
      (
        await axios.get(`${hostname}/invoices_summary`, {
          headers: headers(),
        })
      )?.data
  );

  return { summary };
};

export default useGetSummary;
