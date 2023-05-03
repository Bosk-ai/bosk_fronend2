import { Button } from "../../components/Button";
import { Title } from "../../components/Title";
import { StyledCustomersHeader } from "../../constats/styles";

export const Header = ({ onAddCustomer }) => (
  <StyledCustomersHeader>
    <Title title="Customers" />
    <Button
      onClick={onAddCustomer}
      title="Add a customer"
      color="primary"
      className="add-customer-btn"
    />
  </StyledCustomersHeader>
);
