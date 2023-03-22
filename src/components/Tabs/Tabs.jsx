import { StyledTabs } from "../../constats/styles"
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
