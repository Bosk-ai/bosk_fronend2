import axios from "axios";
import { hostname } from "../../api/hostname";
import { headers } from "../../api/instance";

export const useLogout = () => {
  axios.delete(`${hostname}/users/sing_out`, { headers: headers() })
  localStorage.removeItem("token");
  window.location.replace("/auth");
}