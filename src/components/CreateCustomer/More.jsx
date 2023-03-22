import { Input } from "../Input/Input"
import { StyledCreateCustomerMore } from "../../constats/styles"

export const More = () => (
  <StyledCreateCustomerMore>
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
  </StyledCreateCustomerMore>
)

