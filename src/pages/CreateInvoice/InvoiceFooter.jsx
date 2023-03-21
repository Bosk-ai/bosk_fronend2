import styled from "styled-components";
import { Input } from "../../components/Input/Input";
import { ToggleCard } from "../../components/ToggleCard/ToggleCard";

export const InvoiceFooter = () => (
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

const StyledInvoiceFooter = styled.div`
   .textarea .input-wrapper{
    height: 100px;
    background: #F9FAFB;
  }
`