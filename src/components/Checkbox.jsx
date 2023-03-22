import { StyledCheckbox } from "../constats/styles"

export const Checkbox = ({ label, className }) => (
  <StyledCheckbox className={className}>
    <input type="checkbox" />
    <span className="label">{label}</span>
  </StyledCheckbox>
)
