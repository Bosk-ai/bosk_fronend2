import { useState } from "react"
import styled from "styled-components"
import { Checkbox } from "../Checkbox"
import { Input } from "../Input/Input"
import { Select } from "../Select/Select"

const TEST_OPTIONS = [
  { title: "Test 1", value: "1" },
  { title: "Test 2", value: "2" },
]

const phonesData = require('countries-phone-masks')

export const Shipping = () => {
  const [phoneMask, setPhoneMask] = useState({ ...phonesData[0], mask: phonesData[0]?.mask?.split("").map(symbol => symbol === "#" ? "0" : symbol).join("") });
  const [phone, setPhone] = useState("");

  const handleSelectPhoneMask = (selectedOption) => setPhoneMask({ ...selectedOption, mask: selectedOption?.mask?.split("").map(symbol => symbol === "#" ? "0" : symbol).join("") });

  return (
    <StyledShipping>
      <Checkbox label="Same as billing" className="checkbox" />
      <Input
        value={""}
        onChange={() => null}
        label="Ship to contact"
        placeholder="Business or person"
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
        label="Address line 1"
        placeholder="Enter a location"
        className="input"
      />
      <Input
        value={""}
        onChange={() => null}
        label="Address line 2"
        placeholder="Enter a location"
        className="input"
      />
      <Input
        value={""}
        onChange={() => null}
        label="City"
        className="input"
      />
      <Input
        value={""}
        onChange={() => null}
        label="Postal/ZIP code"
        className="input"
      />
      <Select
        value={""}
        onChange={""}
        label="Country"
        placeholder="Select a country"
        options={TEST_OPTIONS}
        className="input"
      />
      <Select
        value={""}
        onChange={""}
        label="Province/State"
        placeholder="Select a province/state"
        options={TEST_OPTIONS}
        className="input"
      />
    </StyledShipping>
  )
}

const StyledShipping = styled.div`
  .checkbox {
    margin-bottom: 20px;
  }
  .input {
    margin-bottom: 16px;
  }
`