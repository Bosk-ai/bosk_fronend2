import axios from "axios";
import { hostname } from "../../api/hostname";
import { headers } from "../../api/instance";

const useCreateCustomer = () => {
  const handleCreateCustomer = (data) => {
    return axios
      .post(`${hostname}/customers`, data, { headers: headers() })
      .then((resp) => resp)
      .catch((error) => error);
  };

  return {
    createCustomer: handleCreateCustomer,
  };
};

export default useCreateCustomer;
