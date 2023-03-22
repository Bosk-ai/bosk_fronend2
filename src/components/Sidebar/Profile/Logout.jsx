import logoutIcon from "../../../assets/images/logout-icon.svg";
import { StyledLogout } from "../../../constats/styles";

export const Logout = ({ onLogout }) => {
  return (
    <StyledLogout src={logoutIcon} alt="" onClick={onLogout} />
  )
}
