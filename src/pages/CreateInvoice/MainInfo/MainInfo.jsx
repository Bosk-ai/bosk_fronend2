import { StyledMainInfo } from "../../../constats/styles"
import { Customer } from "./Customer/Customer"
import { Items } from "./Items/Items"

export const MainInfo = () => (
  <StyledMainInfo>
    <Customer />
    <Items />
  </StyledMainInfo>
)
