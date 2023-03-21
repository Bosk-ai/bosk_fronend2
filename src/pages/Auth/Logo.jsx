import styled from "styled-components"
import logo from "../../assets/images/logo.svg";

export const Logo = () => <StyledLogo src={logo} alt="" />

const StyledLogo = styled.img`
  display: block;
  margin: 96px auto 24px;
`