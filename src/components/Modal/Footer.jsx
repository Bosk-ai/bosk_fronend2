import { StyledModalFooter } from "../../constats/styles"
import { Button } from "../Button"

export const Footer = ({ onClose }) => (
  <StyledModalFooter>
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
  </StyledModalFooter>
)
