import axios from "axios";
import { useQuery } from "react-query";
import { hostname } from "../../api/hostname";
import { headers } from "../../api/instance";
import { PROFILE } from "../../constats/types";
import { refreshToken } from "./useRefreshToken";


const useGetProfile = () => {

  const { data: profile = null } = useQuery(
    [PROFILE],
    () => axios.get(`${hostname}/profile`, { headers: headers() })
      .then(resp => resp.data)
      .catch(error => {
        const status = error.response.status;
        if (status === 401) {
          refreshToken()
        }
      }),
  );

  return { profile }
}

export default useGetProfile;