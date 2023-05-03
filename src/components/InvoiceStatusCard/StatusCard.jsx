import { StyledStatusCard } from "../../constats/styles";
import { STATUSES } from "./statuses";

export const StatusCard = ({ status, arrow, open }) => (
  <StyledStatusCard
    color={STATUSES[status]?.color}
    background={STATUSES[status]?.background}
    open={open}
  >
    {status}
    {arrow && (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="9"
        height="6"
        viewBox="0 0 9 6"
        fill="none"
      >
        <path
          d="M1.75 1.5L4.75 4.5L7.75 1.5"
          stroke={STATUSES[status]?.color ?? "#667085"}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    )}
  </StyledStatusCard>
);
