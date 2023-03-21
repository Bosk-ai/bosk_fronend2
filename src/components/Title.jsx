import styled from "styled-components"

export const Title = ({ title }) => (
  <StyledTitle>{title}</StyledTitle>
)

const StyledTitle = styled.div`
  font-weight: 600;
  font-size: 30px;
  line-height: 38px;
  color: #101828;
`