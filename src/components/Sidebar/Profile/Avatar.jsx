import styled from "styled-components"

export const Avatar = ({ avatar }) => (
  <StyledAvatar avatar={avatar} />
)

const StyledAvatar = styled.div`
  width: 40px;
  height: 40px;
  background: url(${({ avatar }) => avatar}) center/cover no-repeat;
  border-radius: 200px;
`