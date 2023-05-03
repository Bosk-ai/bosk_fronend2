import { Button } from "../../components/Button";
import { Title } from "../../components/Title";
import { StyledCreateInvoiceHeader } from "../../constats/styles";
import { BackButton } from "./BackButton";
import { InvoiceStatusCard } from "../../components/InvoiceStatusCard/InvoiceStatusCard";

export const Header = ({
  invoiceId,
  name,
  onSave,
  loading,
  status,
  onChangeStatus,
}) => (
  <StyledCreateInvoiceHeader>
    <div className="group">
      <BackButton />
      <Title
        title={invoiceId ? name : "New invoice"}
        className="invoice-header"
      />
      <InvoiceStatusCard status={status} onChangeStatus={onChangeStatus} />
    </div>
    <div className="btns-wrapper">
      <Button
        onClick={() => null}
        title="Preview"
        className="btn btn-preview"
        disabled={loading}
      />
      <Button
        onClick={onSave}
        title="Save as .pdf"
        color="primary"
        className="btn"
        disabled={loading}
      />
    </div>
  </StyledCreateInvoiceHeader>
);
