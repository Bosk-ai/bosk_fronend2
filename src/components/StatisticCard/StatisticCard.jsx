import { StyledStatisticCard } from "../../constats/styles";
import { Icon } from "./Icon";

export const StatisticCard = ({ title, value, icon, color, soon }) => (
  <StyledStatisticCard soon={soon}>
    <Icon color={color} icon={icon} />
    <div>
      <div className="title">{title}</div>
      <div className="value">{value}</div>
    </div>
    {soon && <div className="soon-badge">Soon</div>}
  </StyledStatisticCard>
);
