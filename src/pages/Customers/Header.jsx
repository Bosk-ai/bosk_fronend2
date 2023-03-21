import styled from "styled-components";
import { Button } from "../../components/Button";
import { Title } from "../../components/Title";

export const Header = ({ onAddCustomer }) => (
  <StyledHeader>
    <Title title="Customers" />
    <Button
      onClick={onAddCustomer}
      title="Add a customer"
      color="primary"
      className="add-customer-btn"
    />
  </StyledHeader>
)

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;
  .add-customer-btn {
    height: 40px;
  }
`