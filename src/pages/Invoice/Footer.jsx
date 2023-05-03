import { Button } from "../../components/Button";
import { StyledCreateInvoiceFooter } from "../../constats/styles";

export const Footer = ({ onSave, loading }) => {
  return (
    <StyledCreateInvoiceFooter>
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
    </StyledCreateInvoiceFooter>
  );
};
