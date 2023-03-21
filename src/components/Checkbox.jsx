import styled from "styled-components"

export const Checkbox = ({ label, className }) => (
  <StyledCheckbox className={className}>
    <input type="checkbox" />
    <span className="label">{label}</span>
  </StyledCheckbox>
)

const StyledCheckbox = styled.div`
  .label {
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: #344054;
    margin-left: 8px;
  }
`