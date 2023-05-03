import axios from "axios";
import { useQuery } from "react-query";
import { hostname } from "../../api/hostname";
import { headers } from "../../api/instance";
import { CHART } from "../../constats/types";

const useGetChart = () => {
  const { data: chart = null } = useQuery(
    [CHART],
    async () =>
      (
        await axios.get(`${hostname}/invoices_chart`, {
          headers: headers(),
        })
      )?.data
  );

  return { chart };
};

export default useGetChart;
