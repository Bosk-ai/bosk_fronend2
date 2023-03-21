import styled from "styled-components"
import plusIcon from "../../../../assets/images/plus.svg";

export const CreateButton = ({ onClick }) => (
  <StyledCreateButton onClick={onClick}>
    <img src={plusIcon} alt="" />
    Create new customer
  </StyledCreateButton>
)

const StyledCreateButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #7F56D9;
  cursor: pointer;
  &:hover {
    background: #FFFF !important;
  }
  img {
    margin-right: 8px;
  }
`