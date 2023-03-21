import styled from "styled-components"

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

const StyledButton = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 16px;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 8px;
  height: 44px;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: ${({ color }) => color === "primary" ? "#FFFF" : "#344054"};
  border: 1px solid ${({ color }) => color === "primary" ? "#7F56D9" : "#D0D5DD"};
  background: ${({ color }) => color === "primary" ? "#7F56D9" : "#FFFFFF"};
  cursor: pointer;
  .icon {
    margin-right: 8px;
  }
`