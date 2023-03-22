import { Link } from "react-router-dom"
import { StyledAuthCardFooter } from "../../constats/styles"

export const CardFooter = ({ text, linkText, link }) => (
  <StyledAuthCardFooter>
    <span>{text}</span>
    <Link to={link}>{linkText}</Link>
  </StyledAuthCardFooter>
)

