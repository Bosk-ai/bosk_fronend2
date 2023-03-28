import { StyledCustomersManageBar } from "../../constats/styles";
import { Input } from "../../components/Input/Input"
import searchIcon from "../../assets/images/search-icon.svg";

export const ManageBar = ({ customersCount }) => {
  return (
    <StyledCustomersManageBar>
      <div className="title">{customersCount} customers found</div>
      {/* <Input
        value={""}
        onChange={""}
        className="search-input"
        placeholder="Search"
        iconLeft={searchIcon}
      /> */}
    </StyledCustomersManageBar>
  )
}
