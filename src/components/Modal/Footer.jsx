import { StyledModalFooter } from "../../constats/styles"
import { Button } from "../Button"

export const Footer = ({ onClose, onSave, loading }) => (
  <StyledModalFooter>
    <Button
      onClick={onClose}
      title="Cancel"
      className="btn"
      disabled={loading}
    />
    <Button
      onClick={onSave}
      title="Save"
      color="primary"
      className="btn save-btn"
      disabled={loading}
    />
  </StyledModalFooter>
)
