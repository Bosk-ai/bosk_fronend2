import { Checkbox } from "../../../components/Checkbox"
import { StyledLoginCardFooter } from "../../../constats/styles"

export const Footer = () => {
  return (
    <StyledLoginCardFooter>
      <Checkbox label="Remember for 30 days" />
      <a href="/#/" >Forgot password</a>
    </StyledLoginCardFooter>
  )
}
