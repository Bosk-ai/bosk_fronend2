import styled from "styled-components"

export const Empty = () => (
  <StyledEmpty>No items</StyledEmpty>
)

const StyledEmpty = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px 0;
  font-size: 20px;
  font-weight: bold;
  opacity: .5;
  border: 1px solid rgb(216, 218, 220);
  border-top: none;
  border-bottom: none;
`