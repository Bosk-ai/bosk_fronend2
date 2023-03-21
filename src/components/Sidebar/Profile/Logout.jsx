import styled from "styled-components"
import logoutIcon from "../../../assets/images/logout-icon.svg";

export const Logout = ({ onLogout }) => {
  return (
    <StyledLogout src={logoutIcon} alt="" onClick={onLogout} />
  )
}

const StyledLogout = styled.img`
  display: block;
  margin-left: auto;
  cursor: pointer;
  transition: all .3s;
  &:hover {
    opacity: 0.5;
  }
`