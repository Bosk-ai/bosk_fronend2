import axios from "axios";
import { useQuery } from "react-query";
import { hostname } from "../../api/hostname";
import { headers } from "../../api/instance";
import { PROFILE } from "../../constats/types";


const useGetProfile = () => {

  const { data: profile = null } = useQuery(
    [PROFILE],
    async () => (await axios.get(`${hostname}/profile`, headers())),
  );

  return { profile }
}

export default useGetProfile;