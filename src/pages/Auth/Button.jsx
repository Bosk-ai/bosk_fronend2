import styled from "styled-components"

export const Button = ({ onClick, text, disabled }) => (
  <StyledButton
    onClick={onClick}
    disabled={disabled}
  >
    {text}
  </StyledButton>
)

const StyledButton = styled.button`
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 18px;
  background: #7F56D9;
  border: 1px solid #7F56D9;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 8px;
  width: 100%;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #FFFFFF;
  &:hover {
    background: #6037b7;
  }
`