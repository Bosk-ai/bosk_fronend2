import styled from "styled-components"
import editIcon from "../../../../assets/images/edit.svg";

export const EditButton = ({ onClick }) => (
  <StyledEditButton onClick={onClick}>
    <img src={editIcon} alt="" />
    Edit details
  </StyledEditButton>
)

const StyledEditButton = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #7F56D9;
  transition: all .3s;
  img {
    margin-right: 8px;
  }
  &:hover {
    opacity: .5;
  }
  .tabs {
    
  }
`
