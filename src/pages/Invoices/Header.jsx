import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { Title } from "../../components/Title";
import { StyledInvoicesHeader } from "../../constats/styles";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <StyledInvoicesHeader>
      <Title title="Invoices" />
      <Button
        onClick={() => navigate("/create-invoice")}
        title="Create an invoice"
        color="primary"
        className="create-invoice-btn"
      />
    </StyledInvoicesHeader>
  )
}
