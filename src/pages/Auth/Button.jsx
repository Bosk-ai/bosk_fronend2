import { StyledAuthButton } from "../../constats/styles";

export const Button = ({ onClick, text, disabled }) => (
  <StyledAuthButton
    onClick={onClick}
    disabled={disabled}
  >
    {text}
  </StyledAuthButton>
)
