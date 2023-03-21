import styled from "styled-components"
import { Button } from "../Button"

export const Footer = ({ onClose }) => (
  <StyledFooter>
    <Button
      onClick={onClose}
      title="Cancel"
      className="btn"
    />
    <Button
      onClick={onClose}
      title="Save"
      color="primary"
      className="btn save-btn"
    />
  </StyledFooter>
)

const StyledFooter = styled.div`
  display: flex;
  align-items: center;
  margin-top: 32px;
  .btn {
    width: 100%;
    justify-content: center;
  }
  .save-btn {
    margin-left: 12px;
  }
`