import { useState } from "react";
import styled from "styled-components"
import userIcon from "../../../../assets/images/user-plus.svg";
import { Searching } from "./Searching";

export const Empty = () => {
  const [searching, setSearching] = useState(false);

  return (
    <>
      {
        searching
          ? <Searching />
          : <StyledEmpty onClick={() => setSearching(true)}>
            <div className="icon">
              <img src={userIcon} alt="" />
            </div>
            <div className="text">Add a customer</div>
          </StyledEmpty>
      }
    </>
  )
}

const StyledEmpty = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px 24px;
  width: 325px;
  height: 164px;
  background: #FCFAFF;
  border: 1px dashed #6941C6;
  border-radius: 12px;
  cursor: pointer;
  transition: all .3s;
  &:hover {
    opacity: 0.5;
  }
  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background: #F9F5FF;
    border: 6px solid #F9F5FF;
    border-radius: 28px;
    margin-bottom: 12px;
  }
  .text {
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    color: #6941C6;
  }
`