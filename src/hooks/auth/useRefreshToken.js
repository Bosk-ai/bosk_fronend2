import axios from "axios";
import { hostname } from "../../api/hostname";
import { headers } from "../../api/instance";
import { useLogout } from "./useLogout";

export const refreshToken = () => {
  return axios
    .post(`${hostname}/users/refresh_token`, null, { headers: headers() })
    .then((resp) => console.log(resp))
    .catch(useLogout);
};
