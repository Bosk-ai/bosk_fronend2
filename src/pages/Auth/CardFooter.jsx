import { Link } from "react-router-dom"
import styled from "styled-components"

export const CardFooter = ({ text, linkText, link }) => (
  <StyledCardFooter>
    <span>{text}</span>
    <Link to={link}>{linkText}</Link>
  </StyledCardFooter>
)

const StyledCardFooter = styled.div`
  margin-top: 32px;
  text-align: center;
  span {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #475467;
    margin-right: 4px;
  }
  a {
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    color: #6941C6;
  }
`