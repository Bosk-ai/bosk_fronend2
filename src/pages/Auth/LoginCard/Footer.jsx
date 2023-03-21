import styled from "styled-components"
import { Checkbox } from "../../../components/Checkbox"

export const Footer = () => {
  return (
    <StyledFooter>
      <Checkbox label="Remember for 30 days" />
      <a href="#" >Forgot password</a>
    </StyledFooter>
  )
}

const StyledFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
  .remeber {
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: #344054;
    margin-left: 8px;
  }
  a {
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    color: #6941C6;
  }
`