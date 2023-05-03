import { Link } from "react-router-dom";
import { StyledNavLink } from "../../constats/styles";

export const NavLink = ({ link, active, icon, title }) => (
  <StyledNavLink>
    <Link to={link} className={`${active && "active"}`}>
      <img src={icon} alt="" />
      <span>{title}</span>
    </Link>
  </StyledNavLink>
);
