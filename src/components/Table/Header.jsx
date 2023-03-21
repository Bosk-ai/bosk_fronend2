import styled from "styled-components";
import arrowIcon from "../../assets/images/arrow.svg";

export const Header = ({ columns }) => (
  <StyledHeader>
    {
      columns.map(({ title, onClick, className, arrow, active }, i) => (
        <th
          key={i}
          className={className}
          onClick={() => onClick ? onClick() : null}
        >
          {title}
          <img src={arrowIcon} alt="" className={`${active && "active-arrow"} ${arrow && "arrow-up"}`} />
        </th>
      ))
    }
  </StyledHeader>
)

const StyledHeader = styled.tr`
  th {
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    color: #475467;
    padding: 13px 24px;
    text-align: center;
    cursor: pointer;
    background: #F9FAFB;
    border-bottom: 1px solid #EAECF0;;
    &:first-child {
      border-radius: 12px 0 0 0;
    }
    &:last-child {
      border-radius: 0 12px 0 0;
    }
  }
  span {
    margin-left: 5px;
  }
  img {
    opacity: 0;
    visibility: hidden;
    transition: all .3s;
    margin-left: 4px;
  }
  .active-arrow {
    opacity: 1;
    visibility: visible;
  }
  .arrow-up {
    transform: rotate(180deg);
    transition: all .3s;
  }
`