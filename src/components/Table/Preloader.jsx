import styled from "styled-components";
import spinnerIcon from "../../assets/images/spinner.svg";

export const Preloader = ({ className }) => (
  <StyledPreloader className={className}>
    <img src={spinnerIcon} alt="" />
  </StyledPreloader>
)

const StyledPreloader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    height: 100px;
  }
`