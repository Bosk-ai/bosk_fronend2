import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../../components/Button";
import { Title } from "../../components/Title";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <StyledHeader>
      <Title title="Invoices" />
      <Button
        onClick={() => navigate("/create-invoice")}
        title="Create an invoice"
        color="primary"
        className="create-invoice-btn"
      />
    </StyledHeader>
  )
}

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;
  .create-invoice-btn {
    height: 40px;
  }
`