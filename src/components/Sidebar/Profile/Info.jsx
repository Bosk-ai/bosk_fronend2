import { StyledProfileInfo } from "../../../constats/styles";

export const Info = ({ name, role }) => (
  <StyledProfileInfo>
    <div className="name">{name}</div>
    <div className="role">{role}</div>
  </StyledProfileInfo>
);
