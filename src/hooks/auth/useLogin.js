import axios from "axios";
import { hostname } from "../../api/hostname";
import { headers } from "../../api/instance";


const useLogin = () => {

  const handleLogin = (data) => {
    return axios.post(`${hostname}/users/sign_in`, data, { headers: headers() })
      .then(resp => resp)
      .catch(error => error)
  }

  return {
    login: handleLogin
  }
}

export default useLogin;