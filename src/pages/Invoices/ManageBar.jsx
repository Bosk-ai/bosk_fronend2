import styled from "styled-components"
import { Input } from "../../components/Input/Input"
import { Tabs } from "../../components/Tabs/Tabs"
import searchIcon from "../../assets/images/search-icon.svg";
import filterIcon from "../../assets/images/filter-lines.svg";
import { Button } from "../../components/Button";

export const ManageBar = ({ tabs, activeTab, onChangeTab }) => {
  return (
    <StyledManageBar>
      <Tabs
        tabs={tabs}
        activeTab={activeTab}
        onChangeTab={onChangeTab}
      />
      <div className="filters-btns">
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
      </div>
    </StyledManageBar>
  )
}

const StyledManageBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
  .search-input {
    margin-right: 12px;
    width: 100%;
  }
  .filters-btns {
    display: flex;
    align-items: center;
    width: 40%;
  }
  .filter-btn {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
  }
`