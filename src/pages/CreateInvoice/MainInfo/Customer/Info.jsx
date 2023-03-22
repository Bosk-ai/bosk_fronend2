import { Input } from "../../../../components/Input/Input"
import { StyledMainInfoInfo } from "../../../../constats/styles"

export const Info = () => (
  <StyledMainInfoInfo>
    <div className="info-item">
      <span className="info-item-label">Invoice number</span>
      <Input
        value={""}
        onChange={() => null}
      />
    </div>
    <div className="info-item">
      <span className="info-item-label">P.O. / S.O. number</span>
      <Input
        value={""}
        onChange={() => null}
        placeholder="Purchase/service order"
      />
    </div>
    <div className="info-item">
      <span className="info-item-label">Invoice date</span>
      <Input
        value={""}
        onChange={() => null}
        type="date"
      />
    </div>
    <div className="info-item">
      <span className="info-item-label">Payment due</span>
      <Input
        value={""}
        onChange={() => null}
        type="date"
      />
    </div>
  </StyledMainInfoInfo>
)
