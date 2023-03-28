import axios from "axios";
import { useQuery } from "react-query";
import { hostname } from "../../api/hostname";
import { headers } from "../../api/instance";
import { COUNTRIES } from "../../constats/types";


const useCountries = () => {

  const { data: countries = null } = useQuery(
    [COUNTRIES],
    async () => (await axios.get(`${hostname}/countries`, { headers: headers() }))?.data,
  );

  return { countries }
}

export default useCountries;