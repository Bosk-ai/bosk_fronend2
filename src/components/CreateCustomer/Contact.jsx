import { useState } from "react";
import styled from "styled-components"
import { Input } from "../Input/Input"

const phonesData = require('countries-phone-masks')

export const Contact = () => {
  const [phoneMask, setPhoneMask] = useState({ ...phonesData[0], mask: phonesData[0]?.mask?.split("").map(symbol => symbol === "#" ? "0" : symbol).join("") });
  const [phone, setPhone] = useState("");

  const handleSelectPhoneMask = (selectedOption) => setPhoneMask({ ...selectedOption, mask: selectedOption?.mask?.split("").map(symbol => symbol === "#" ? "0" : symbol).join("") });


  return (
    <StyledContact>
      <Input
        value={""}
        onChange={() => null}
        label="Company/Business"
        placeholder="Business or person"
        className="input"
      />
      <Input
        value={""}
        onChange={() => null}
        label="Email"
        placeholder="name@domain.com"
        className="input"
      />
      <Input
        value={phone}
        onChange={(value) => setPhone(value)}
        label="Phone"
        placeholder={`${phoneMask.code}${phoneMask?.mask}`}
        className="input"
        selectLeft={phonesData.map((countryPhone) => ({ title: countryPhone.iso, ...countryPhone }))}
        selectValue={phoneMask?.iso}
        onChangeSelect={handleSelectPhoneMask}
        mask={`${phoneMask.code}${phoneMask?.mask}`}
        change
      />
      <Input
        value={""}
        onChange={() => null}
        label="First name"
        placeholder="Olivia"
        className="input"
      />
      <Input
        value={""}
        onChange={() => null}
        label="Last name"
        placeholder="Fernandez"
      />
    </StyledContact>
  )
}

const StyledContact = styled.div`
  .input {
    margin-bottom: 16px;
  }
`