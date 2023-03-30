import { StyledMainInfo } from "../../../constats/styles"
import { Customer } from "./Customer/Customer"
import { Items } from "./Items/Items"

export const MainInfo = ({ data, onUpdateData, errors }) => (
  <StyledMainInfo>
    <Customer
      data={data}
      onUpdateData={onUpdateData}
      errors={errors}
    />
    <Items
      data={data}
      onUpdateData={onUpdateData}
    />
  </StyledMainInfo>
)
