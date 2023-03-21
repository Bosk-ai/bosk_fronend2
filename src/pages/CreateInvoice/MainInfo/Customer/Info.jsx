import styled from "styled-components"
import { Input } from "../../../../components/Input/Input"

export const Info = () => {
  return (
    <StyledInfo>
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
    </StyledInfo>
  )
}

const StyledInfo = styled.div`
  .info-item {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 12px;
    margin-bottom: 16px;
  }
  .info-item-label {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    text-align: right;
    color: #667085;
  }
`