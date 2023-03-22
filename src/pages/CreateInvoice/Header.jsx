import { Button } from "../../components/Button";
import { Title } from "../../components/Title";
import { StyledCreateInvoiceHeader } from "../../constats/styles";

export const Header = () => (
  <StyledCreateInvoiceHeader>
    <Title title="New invoice" />
    <div className="btns-wrapper">
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
    </div>
  </StyledCreateInvoiceHeader>
)
