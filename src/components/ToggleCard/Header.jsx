import styled from "styled-components";
import arrow from "../../assets/images/arrow.svg";

export const Header = ({ title, open, onToggleOpen, innerRef }) => (
  <StyledHeader
    onClick={onToggleOpen}
    open={open}
    className="no-select toggle-card-header"
    ref={innerRef}
  >
    <span>{title}</span>
    <img src={arrow} alt="" />
  </StyledHeader>
)

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  color: #101828;
  transition: all .3s;
  cursor: pointer;
  img {
    transition: all .3s;
  }
  margin-bottom: 24px;
  ${({ open }) => open && "img{transform: rotate(180deg);}"}
`