import { Input } from "../../components/Input/Input";
import { ToggleCard } from "../../components/ToggleCard/ToggleCard";
import { StyledInvoiceFooter } from "../../constats/styles";

export const InvoiceFooter = ({ data, onUpdateData }) => (
  <ToggleCard title="Footer">
    <StyledInvoiceFooter>
      <Input
        value={""}
        onChange={() => null}
        placeholder="Enter a footer for this invoice (e.g. tax information, thank you note)"
        className="textarea"
        textarea
      />
    </StyledInvoiceFooter>
  </ToggleCard>
)

