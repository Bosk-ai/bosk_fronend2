import styled from "styled-components"
import { Input } from "../../../../components/Input/Input"

export const More = () => (
  <StyledMore>
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
  </StyledMore>
)

const StyledMore = styled.div`
  .input {
    margin-bottom: 16px;
  }
`