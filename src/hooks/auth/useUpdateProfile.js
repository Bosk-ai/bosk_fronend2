import axios from "axios";
import { hostname } from "../../api/hostname";
import { headers } from "../../api/instance";


const useUpdateProfile = () => {

  const handleUpdateProfile = (data) => {
    return axios.put(`${hostname}/profile`, data, { headers: headers() })
      .then(resp => resp)
      .catch(error => error)
  }

  return {
    updateProfile: handleUpdateProfile
  }
}

export default useUpdateProfile;