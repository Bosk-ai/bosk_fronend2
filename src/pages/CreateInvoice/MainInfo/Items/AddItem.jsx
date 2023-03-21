import styled from "styled-components"
import plusIcon from "../../../../assets/images/plus.svg";

export const AddItem = ({ onAdd, border }) => (
  <StyledAddItem border={border}>
    <td>
      <div className="add-item" onClick={onAdd}>
        <img src={plusIcon} alt="" />
        Add an item
      </div>
    </td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </StyledAddItem>
)

const StyledAddItem = styled.tr`
  ${({ border }) => border && `
    td {
      width: 100%;
    }
    td:nth-child(1) {
      border-left: 1px solid #EAECF0;
    }
    td:nth-child(5) {
      border-right: 1px solid #EAECF0;
    }
  `}
  .add-item {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #7F56D9;
    transition: all .3s;
    &:hover {
      opacity: .5;
    }
  }
  img {
    margin-right: 8px;
  }
`