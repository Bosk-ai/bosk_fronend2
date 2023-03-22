import { useState } from "react";
import userIcon from "../../../../assets/images/user-plus.svg";
import { StyledEmptyCustomer } from "../../../../constats/styles";
import { Searching } from "./Searching";

export const Empty = () => {
  const [searching, setSearching] = useState(false);

  return (
    <>
      {
        searching
          ? <Searching />
          : <StyledEmptyCustomer onClick={() => setSearching(true)}>
            <div className="icon">
              <img src={userIcon} alt="" />
            </div>
            <div className="text">Add a customer</div>
          </StyledEmptyCustomer>
      }
    </>
  )
}

