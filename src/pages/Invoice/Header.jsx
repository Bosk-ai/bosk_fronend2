import { Button } from "../../components/Button";
import { Title } from "../../components/Title";
import { StyledCreateInvoiceHeader } from "../../constats/styles";

export const Header = ({ onSave, loading }) => (
  <StyledCreateInvoiceHeader>
    <Title title="New invoice" />
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
)
