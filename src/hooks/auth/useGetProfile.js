import axios from "axios";
import { useQuery, useQueryClient } from "react-query";
import { hostname } from "../../api/hostname";
import { headers } from "../../api/instance";
import { PROFILE } from "../../constats/types";
import { refreshToken } from "./useRefreshToken";


const useGetProfile = () => {
  const client = useQueryClient();

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

  const handleRefetchUser = () => {
    axios.get(`${hostname}/profile`, { headers: headers() })
      .then(resp => client.setQueriesData(PROFILE, resp.data))
  }

  return { profile, handleRefetchUser }
}

export default useGetProfile;