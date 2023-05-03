import styled from "styled-components";
import { Input } from "../../../../components/Input/Input";
import euroIcon from "../../../../assets/images/euro.svg";
import { Select } from "../../../../components/Select/Select";
import { StyledMainInfoBilings } from "../../../../../../constats/styles";

const CURRENCY_OPTIONS = [
  { title: "EUR", value: "1" },
  { title: "USD", value: "2" },
];

const TEST_OPTIONS = [
  { title: "Test 1", value: "1" },
  { title: "Test 2", value: "2" },
];

export const Bilings = () => (
  <StyledMainInfoBilings>
    <Input
      value={""}
      onChange={() => null}
      label="Currency *"
      placeholder="Euro"
      className="input"
      selectRight={CURRENCY_OPTIONS}
      selectValue="EUR"
      iconLeft={euroIcon}
      disabled
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
    <Input value={""} onChange={() => null} label="City" className="input" />
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
  </StyledMainInfoBilings>
);
