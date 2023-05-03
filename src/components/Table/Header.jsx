import arrowIcon from "../../assets/images/arrow.svg";
import { StyledTableHeader } from "../../constats/styles";

export const Header = ({ columns }) => (
  <StyledTableHeader>
    {columns.map(({ title, onClick, className, arrow, active }, i) => (
      <th
        key={i}
        className={className}
        onClick={() => (onClick ? onClick() : null)}
      >
        {title}
        <img
          src={arrowIcon}
          alt=""
          className={`${active && "active-arrow"} ${arrow && "arrow-up"}`}
        />
      </th>
    ))}
  </StyledTableHeader>
);
