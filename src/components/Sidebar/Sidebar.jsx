import styled from "styled-components"
import { Logo } from "./Logo"
import { NavLinks } from "./NavLinks"
import { Profile } from "./Profile/Profile"

export const Sidebar = ({ onLogout }) => {
  return (
    <StyledSidebar>
      <div>
        <Logo />
        <NavLinks />
      </div>
      <Profile onLogout={onLogout} />
    </StyledSidebar>
  )
}

const StyledSidebar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #101828;
  min-height: 100vh;
  padding: 32px 16px;
`