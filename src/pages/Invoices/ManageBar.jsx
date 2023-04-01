import { StyledInvoicesManageBar } from "../../constats/styles";
import { Tabs } from "../../components/Tabs/Tabs"
// import { Input } from "../../components/Input/Input"
// import searchIcon from "../../assets/images/search-icon.svg";
// import filterIcon from "../../assets/images/filter-lines.svg";
// import { Button } from "../../components/Button";

export const ManageBar = ({ tabs, activeTab, onChangeTab }) => {
  return (
    <StyledInvoicesManageBar>
      <Tabs
        tabs={tabs}
        activeTab={activeTab}
        onChangeTab={onChangeTab}
      />
      {/* <div className="filters-btns">
        <Input
          value={""}
          onChange={""}
          className="search-input"
          placeholder="Search"
          iconLeft={searchIcon}
        />
        <Button
          onClick={() => null}
          title="Filters"
          icon={filterIcon}
          className="filter-btn"
        />
      </div> */}
    </StyledInvoicesManageBar>
  )
}
