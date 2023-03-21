import styled from "styled-components";
import logo from "../../assets/images/logo.svg";

export const Logo = () => (
  <StyledLogo>
    <img src={logo} alt="" />
    <span>Bosk</span>
  </StyledLogo>
)

const StyledLogo = styled.a`
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 20px;
  line-height: 38px;
  color: #FFFFFF;
  margin-bottom: 24px;
  padding: 0 14px;
  img {
    height: 32px;
  }
  span {
    margin-left: 8px;
  }
`