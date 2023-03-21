import styled from "styled-components"
import { Empty } from "./Empty"
import { Info } from "./Info"

export const Customer = () => {
  return (
    <StyledCustomer>
      <Empty />
      <Info />
    </StyledCustomer>
  )
}

const StyledCustomer = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
`