import { Input } from "../../../../components/Input/Input";
import { StyledNotes } from "../../../../constats/styles";

export const Notes = ({ data, onUpdateData }) => (
  <StyledNotes>
    <Input
      value={data.note}
      onChange={(value) => onUpdateData("note", value)}
      label="Notes / Terms"
      placeholder="Add terms og payment, bank details, etc."
      className="textarea"
      textarea
    />
  </StyledNotes>
);
