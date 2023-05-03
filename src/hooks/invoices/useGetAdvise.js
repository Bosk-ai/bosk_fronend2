import axios from "axios";
import { hostname } from "../../api/hostname";
import { headers } from "../../api/instance";

const useGetAdvise = () => {
  const handleGetAdvise = (country_code) => {
    return axios
      .get(`${hostname}/invoices_advise`, {
        headers: headers(),
        params: { country_code },
      })
      .then((resp) => resp)
      .catch((error) => error);
  };

  return {
    getAdvise: handleGetAdvise,
  };
};

export default useGetAdvise;
