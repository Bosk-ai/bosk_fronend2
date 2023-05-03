import { StyledStatisticCardIcon } from "../../constats/styles";

export const Icon = ({ icon, color }) => (
  <StyledStatisticCardIcon color={color}>
    <img src={icon} alt="" />
  </StyledStatisticCardIcon>
);
