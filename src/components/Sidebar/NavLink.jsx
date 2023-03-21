import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavLink = ({ link, active, icon, title }) => (
  <StyledNavLink>
    <Link
      to={link}
      className={`${active && "active"}`}
    >
      <img src={icon} alt="" />
      <span>{title}</span>
    </Link>
  </StyledNavLink>
)

const StyledNavLink = styled.div`
  a {
    display: flex;
    align-items: center;
    padding: 10px 14px;
    border-radius: 6px;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #F2F4F7;
    transition: all .3s;
    margin-bottom: 4px;
    span {
      margin-left: 12px;
    }
    &:hover,&.active {
      background: #42307D;
    }
  }
`