import logo from "../../assets/images/logo.svg";
import { StyledSidebarLogo } from "../../constats/styles";

export const Logo = () => (
  <StyledSidebarLogo>
    <img src={logo} alt="" />
    <span>Bosk</span>
  </StyledSidebarLogo>
)
