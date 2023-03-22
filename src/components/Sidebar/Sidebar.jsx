import { StyledSidebar } from "../../constats/styles"
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
