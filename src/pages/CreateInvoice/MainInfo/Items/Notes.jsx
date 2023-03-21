import styled from "styled-components"
import { Input } from "../../../../components/Input/Input"

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

const StyledNotes = styled.div`
  padding: 16px 24px;
  border: 1px solid #EAECF0;
  border-radius: 0 0 12px 10px;
  border-top: none;
  .textarea .input-wrapper{
    height: 154px;
    background: #F9FAFB;
  }
`