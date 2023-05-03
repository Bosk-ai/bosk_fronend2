import { StyledSelectedCustomer } from "../../../../constats/styles";
import profileIcon from "../../../../assets/images/profile.svg";

export const SelectedCustomer = ({
  clientName,
  address,
  city,
  country,
  onSearch,
}) => (
  <StyledSelectedCustomer>
    <div>
      <b>Bill to</b>
    </div>
    <div>{clientName}</div>
    <div>
      {city}
      {city ? "," : ""} {address}
    </div>
    <div>{country}</div>
    <div className="choose-diferent" onClick={onSearch}>
      <img src={profileIcon} alt="" />
      Choose a different customer
    </div>
  </StyledSelectedCustomer>
);
