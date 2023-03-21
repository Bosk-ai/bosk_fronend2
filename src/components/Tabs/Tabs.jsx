import styled from "styled-components"
import { Tab } from "./Tab"

export const Tabs = ({ tabs, activeTab, onChangeTab, className }) => {
  return (
    <StyledTabs className={className}>
      {
        tabs?.length > 0 &&
        tabs.map(({ title, value }, i) => (
          <Tab
            key={i}
            title={title}
            active={activeTab.value === value}
            onSelect={() => onChangeTab({ title, value })}
          />
        ))
      }
    </StyledTabs>
  )
}

const StyledTabs = styled.div`
  padding: 4px;
  background: #F2F4F7;
  border: 1px solid #F2F4F7;
  border-radius: 8px;
  display: flex;
  align-items: center;
  width: max-content;
`