import styled from "styled-components"
import { Customer } from "./Customer/Customer"
import { Items } from "./Items/Items"

export const MainInfo = () => {
  return (
    <StyledMainInfo>
      <Customer />
      <Items />
    </StyledMainInfo>
  )
}

const StyledMainInfo = styled.div`
  padding: 24px;
  background: #FFFFFF;
  border: 1px solid #EAECF0;
  box-shadow: 0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06);
  border-radius: 12px;
  margin-bottom: 24px;
`