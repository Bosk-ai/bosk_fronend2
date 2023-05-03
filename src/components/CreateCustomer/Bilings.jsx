import euroIcon from "../../assets/images/euro.svg";
import { StyledBilings } from "../../constats/styles";
import useCountries from "../../hooks/customers/useCountries";
import { Input } from "../Input/Input";
import { Select } from "../Select/Select";

const CURRENCY_OPTIONS = [
  { title: "EUR", value: "EUR" },
  { title: "USD", value: "USD" },
];

const TEST_OPTIONS = [
  { title: "Test 1", value: "1" },
  { title: "Test 2", value: "2" },
];

export const Bilings = ({ data, onUpdateData, errors }) => {
  const { countries } = useCountries();

  return (
    <StyledBilings>
      <Input
        selectValue={data.currency}
        onChangeSelect={(opt) => onUpdateData("currency", opt.value)}
        label="Currency*"
        placeholder="Euro"
        className="input"
        selectRight={CURRENCY_OPTIONS}
        iconLeft={euroIcon}
        disabled
        noShowInputValue
        error={errors.includes("currency")}
      />
      <Input
        value={data.address_1}
        onChange={(value) => onUpdateData("address_1", value)}
        label="Address line 1*"
        placeholder="Enter a location"
        className="input"
        error={errors.includes("address_1")}
      />
      <Input
        value={data.address_2}
        onChange={(value) => onUpdateData("address_2", value)}
        label="Address line 2"
        placeholder="Enter a location"
        className="input"
        error={errors.includes("address_2")}
      />
      <Input
        value={data.city}
        onChange={(value) => onUpdateData("city", value)}
        label="City*"
        className="input"
        error={errors.includes("city")}
      />
      <Input
        value={data.postal_code}
        onChange={(value) => onUpdateData("postal_code", value)}
        label="Postal/ZIP code*"
        className="input"
        error={errors.includes("postal_code")}
      />
      <Select
        value={data.country}
        onChange={(opt) => onUpdateData("country", opt.value)}
        label="Country*"
        placeholder="Select a country"
        options={
          countries
            ? countries.map((country) => ({
                title: country[1],
                value: country[0],
              }))
            : []
        }
        className="input"
        error={errors.includes("country")}
      />
      <Input
        value={data.province}
        onChange={(value) => onUpdateData("province", value)}
        label="Province/State"
        error={errors.includes("province")}
      />
    </StyledBilings>
  );
};
