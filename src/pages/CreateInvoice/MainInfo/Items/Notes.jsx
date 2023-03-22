import { Input } from "../../../../components/Input/Input"
import { StyledNotes } from "../../../../constats/styles"

export const Notes = () => (
  <StyledNotes>
    <Input
      value={""}
      onChange={() => null}
      label="Notes / Terms"
      placeholder="Add terms og payment, bank details, etc."
      className="textarea"
      textarea
    />
  </StyledNotes>
)

