import { Avatar } from "./Avatar"
import avatarImg from "../../../assets/images/avatar.jfif";
import { Info } from "./Info";
import { Logout } from "./Logout";
// import useGetProfile from "../../../hooks/auth/useGetProfile";
import { StyledProfile } from "../../../constats/styles";

export const Profile = ({ onLogout }) => {
  // const { profile } = useGetProfile();

  return (
    <StyledProfile>
      <Avatar avatar={avatarImg} />
      <Info name="Olivia Fernandez" role="Autónomo" />
      <Logout onLogout={onLogout} />
    </StyledProfile>
  )
}
