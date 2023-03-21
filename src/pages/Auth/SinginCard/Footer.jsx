import styled from "styled-components"

export const Footer = () => {
  return (
    <StyledFooter>
      Must be at least 8 characters.
    </StyledFooter>
  )
}

const StyledFooter = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #475467;
  margin-bottom: 24px;
`