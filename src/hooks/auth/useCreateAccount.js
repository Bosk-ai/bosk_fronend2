import axios from "axios";
import { hostname } from "../../api/hostname";
import { headers } from "../../api/instance";


const useCreateAccount = () => {

  const handleCreateAccount = (data) => {
    return axios.post(`${hostname}/users`, data, headers())
      .then(resp => resp)
      .catch(error => error)
  }

  return {
    createAccount: handleCreateAccount
  }
}

export default useCreateAccount;