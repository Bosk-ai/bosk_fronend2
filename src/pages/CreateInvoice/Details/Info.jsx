import styled from "styled-components"

export const Info = () => (
  <StyledInfo>
    <div className="name">Olivia Fernandez</div>
    <div>Tax number (NIE): Y8089875A</div>
    <div>C/ BISBE JAUME PÉREZ, 18 P03 016</div>
    <div>Valencia, Comunidad Valenciana</div>
    <div>46006</div>
    <div>Spain</div>
  </StyledInfo>
)

const StyledInfo = styled.div`
  text-align: right;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #475467;
  .name {
    font-weight: 600;
  }
`