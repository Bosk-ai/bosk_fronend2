import { Input } from "../../../../components/Input/Input"
import { StyledCreateInvoiceEditDetailseMore } from "../../../../constats/styles"

export const More = () => (
  <StyledCreateInvoiceEditDetailseMore>
    <Input
      value={""}
      onChange={() => null}
      label="Website"
      placeholder="Enter a location"
      className="input"
    />
    <Input
      value={""}
      onChange={() => null}
      label="Internal notes"
      placeholder="Will be not visible for your customer"
      className="input"
      textarea
    />
  </StyledCreateInvoiceEditDetailseMore>
)

