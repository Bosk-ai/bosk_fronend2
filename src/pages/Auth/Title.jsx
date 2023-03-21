import styled from "styled-components"

export const Title = ({ title }) => (
  <StyledTitle>{title}</StyledTitle>
)

const StyledTitle = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 38px;
  text-align: center;
  color: #101828;
  margin-bottom: 12px;
`