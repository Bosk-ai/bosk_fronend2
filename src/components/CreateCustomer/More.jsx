import { Input } from "../Input/Input";
import { StyledCreateCustomerMore } from "../../constats/styles";

export const More = ({ data, onUpdateData, errors }) => (
  <StyledCreateCustomerMore>
    <Input
      value={data.website}
      onChange={(value) => onUpdateData("website", value)}
      label="Website"
      placeholder="Enter a location"
      className="input"
      error={errors.includes("website")}
    />
    <Input
      value={data.notes}
      onChange={(value) => onUpdateData("notes", value)}
      label="Internal notes"
      placeholder="Will be not visible for your customer"
      className="input"
      textarea
      error={errors.includes("notes")}
    />
  </StyledCreateCustomerMore>
);
