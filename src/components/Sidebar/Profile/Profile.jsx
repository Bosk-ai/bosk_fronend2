import styled from "styled-components"
import { Avatar } from "./Avatar"
import avatarImg from "../../../assets/images/avatar.jfif";
import { Info } from "./Info";
import { Logout } from "./Logout";
import useGetProfile from "../../../hooks/auth/useGetProfile";

export const Profile = ({ onLogout }) => {
  const { profile } = useGetProfile();

  return (
    <StyledProfile>
      <Avatar avatar={avatarImg} />
      <Info name="Olivia Fernandez" role="Autónomo" />
      <Logout onLogout={onLogout} />
    </StyledProfile>
  )
}

const StyledProfile = styled.div`
  display: flex;
  align-items: center;
`