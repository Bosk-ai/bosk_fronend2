import styled from "styled-components"

export const Tab = ({ title, onSelect, active }) => (
  <StyledTab
    onClick={onSelect}
    active={active}
  >
    {title}
  </StyledTab>
)

const StyledTab = styled.div`
  padding: 8px 12px;
  border-radius: 6px;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  cursor: pointer;
  transition: all .3s;
  color: ${({ active }) => active ? "#344054" : "#667085"};
  background: ${({ active }) => active ? "#FFFFFF" : "none"};
  ${({ active }) => active && "box-shadow: 0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06);"}
  ${({ active }) => !active && "&:hover { opacity: 0.5; }"}
`