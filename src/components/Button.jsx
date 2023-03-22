import { StyledButton } from "../constats/styles"

export const Button = ({
  onClick,
  title,
  disabled,
  color = "default",
  className,
  icon
}) => (
  <StyledButton
    onClick={onClick}
    disabled={disabled}
    color={color}
    className={className}
  >
    {icon && <img src={icon} alt="" className="icon" />}
    {title}
  </StyledButton>
)
