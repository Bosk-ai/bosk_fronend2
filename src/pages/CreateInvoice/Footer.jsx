import { Button } from "../../components/Button";
import { StyledCreateInvoiceFooter } from "../../constats/styles";

export const Footer = () => {
  return (
    <StyledCreateInvoiceFooter>
      <Button
        onClick={() => null}
        title="Preview"
        className="btn btn-preview"
      />
      <Button
        onClick={() => null}
        title="Save as .pdf"
        color="primary"
        className="btn"
      />
    </StyledCreateInvoiceFooter>
  )
}
