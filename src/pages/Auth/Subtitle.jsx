import styled from "styled-components"

export const Subtitle = ({ text }) => (
  <StyledSubtitle>{text}</StyledSubtitle>
)

const StyledSubtitle = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #475467;
  margin-bottom: 32px;
`