import { StyledCreateInvoiceCustomerMore } from "../../../../../../constats/styles"
import { Input } from "../../../../components/Input/Input"

export const More = () => (
  <StyledCreateInvoiceCustomerMore>
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
  </StyledCreateInvoiceCustomerMore>
)

