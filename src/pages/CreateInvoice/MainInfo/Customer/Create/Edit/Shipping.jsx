import styled from "styled-components"
import { Input } from "../../../../components/Input/Input"
import euroIcon from "../../../../assets/images/euro.svg";
import { Select } from "../../../../components/Select/Select";
import { Checkbox } from "../../../../components/Checkbox";
import { StyledShipping } from "../../../../../../constats/styles";

const PHONE_OPTIONS = [
  { title: "ES", value: "1" },
  { title: "ES2", value: "2" },
  { title: "ES3", value: "3" },
]


const TEST_OPTIONS = [
  { title: "Test 1", value: "1" },
  { title: "Test 2", value: "2" },
]

export const Shipping = () => (
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
      value={""}
      onChange={() => null}
      label="Phone"
      placeholder="+34 000 000 000"
      className="input"
      selectLeft={PHONE_OPTIONS}
      selectValue={"ES"}
      onChangeSelect={() => null}
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
