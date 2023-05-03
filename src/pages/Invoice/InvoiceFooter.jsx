import { useState } from "react";
import { Input } from "../../components/Input/Input";
import { ToggleCard } from "../../components/ToggleCard/ToggleCard";
import { StyledInvoiceFooter } from "../../constats/styles";
import { TaxText } from "./TaxText";

export const InvoiceFooter = ({
  data,
  onUpdateData,
  advise,
  onCloseAdvise,
}) => {
  const [value, setValue] = useState("");

  return (
    <ToggleCard title="Footer">
      <StyledInvoiceFooter>
        <div className="footer-wrapper">
          {advise && <TaxText text={advise} onClose={onCloseAdvise} />}
          <Input
            value={value}
            onChange={(v) => setValue(v)}
            placeholder="Enter a footer for this invoice (e.g. tax information, thank you note)"
            textarea
            className="textarea"
          />
        </div>
      </StyledInvoiceFooter>
    </ToggleCard>
  );
};
