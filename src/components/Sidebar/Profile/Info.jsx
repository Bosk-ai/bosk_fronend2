import styled from "styled-components"

export const Info = ({ name, role }) => (
  <StyledInfo>
    <div className="name">{name}</div>
    <div className="role">{role}</div>
  </StyledInfo>
)

const StyledInfo = styled.div`
  font-size: 14px;
  line-height: 20px;
  margin-left: 12px;
  .name {
    font-weight: 600;
    color: #FFFFFF;
  }
  .role {
    font-weight: 400;
    color: #F2F4F7;
  }
`