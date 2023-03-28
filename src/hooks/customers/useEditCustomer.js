import axios from "axios";
import { hostname } from "../../api/hostname";
import { headers } from "../../api/instance";


const useEditCustomer = () => {

  const handleEditCustomer = ({ id, ...data }) => {
    return axios.put(`${hostname}/customers/${id}`, data, { headers: headers() })
      .then(resp => resp)
      .catch(error => error)
  }

  return {
    editCustomer: handleEditCustomer
  }
}

export default useEditCustomer;