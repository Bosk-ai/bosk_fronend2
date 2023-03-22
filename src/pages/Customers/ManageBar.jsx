import { StyledCustomersManageBar } from "../../constats/styles";
import { Input } from "../../components/Input/Input"
import searchIcon from "../../assets/images/search-icon.svg";

export const ManageBar = ({ tabs, activeTab, onChangeTab }) => {
  return (
    <StyledCustomersManageBar>
      <div className="title">14 customers found</div>
      <Input
        value={""}
        onChange={""}
        className="search-input"
        placeholder="Search"
        iconLeft={searchIcon}
      />
    </StyledCustomersManageBar>
  )
}
