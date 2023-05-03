import { Input } from "../../../../components/Input/Input";
import { StyledMainInfoInfo } from "../../../../constats/styles";
import { formatInputDate } from "../../../../helpers/date";

export const Info = ({ data, onUpdateData, errors }) => (
  <StyledMainInfoInfo>
    <div className="info-item">
      <span className="info-item-label">Invoice number</span>
      <Input
        value={data.number}
        onChange={(value) => onUpdateData("number", value)}
        error={errors.includes("number")}
      />
    </div>
    <div className="info-item">
      <span className="info-item-label">P.O. / S.O. number</span>
      <Input
        value={data.po_number}
        onChange={(value) => onUpdateData("po_number", value)}
        placeholder="Purchase/service order"
      />
    </div>
    <div className="info-item">
      <span className="info-item-label">Invoice date</span>
      <Input
        value={data?.issue_date ? formatInputDate(data?.issue_date) : ""}
        onChange={(value) => onUpdateData("issue_date", value)}
        type="date"
        error={errors.includes("issue_date")}
      />
    </div>
    <div className="info-item">
      <span className="info-item-label">Payment due</span>
      <Input
        value={data?.due_date ? formatInputDate(data?.due_date) : ""}
        onChange={(value) => onUpdateData("due_date", value)}
        type="date"
        error={errors.includes("due_date")}
      />
    </div>
  </StyledMainInfoInfo>
);
