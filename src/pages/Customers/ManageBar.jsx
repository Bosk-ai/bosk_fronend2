import styled from "styled-components"
import { Input } from "../../components/Input/Input"
import searchIcon from "../../assets/images/search-icon.svg";

export const ManageBar = ({ tabs, activeTab, onChangeTab }) => {
  return (
    <StyledManageBar>
      <div className="title">14 customers found</div>
      <Input
        value={""}
        onChange={""}
        className="search-input"
        placeholder="Search"
        iconLeft={searchIcon}
      />
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
    width: 90%;
    max-width: 320px;
  }
 .title {
    font-weight: 600;
    font-size: 18px;
    line-height: 28px;
    color: #101828;
    margin-right: 20px;
 }
`