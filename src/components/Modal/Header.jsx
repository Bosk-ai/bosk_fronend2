import styled from "styled-components"
import closeIcon from "../../assets/images/close.svg";

export const Header = ({ title, onClose }) => (
  <StyledHeader>
    <span>{title}</span>
    <img
      onClick={onClose}
      src={closeIcon}
      alt=""
    />
  </StyledHeader>
)

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  color: #101828;
  img {
    cursor: pointer;
    transition: all .3s;
    &:hover {
      opacity:  0.5;
    }
  }
`