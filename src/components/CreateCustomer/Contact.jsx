import { useState } from "react";
import { StyledContact } from "../../constats/styles";
import { Input } from "../Input/Input";

const phonesData = require("countries-phone-masks");

export const Contact = ({ data, onUpdateData, errors }) => {
  const [phoneMask, setPhoneMask] = useState({
    ...phonesData[0],
    mask: phonesData[0]?.mask
      ?.split("")
      .map((symbol) => (symbol === "#" ? "0" : symbol))
      .join(""),
  });

  const handleSelectPhoneMask = (selectedOption) =>
    setPhoneMask({
      ...selectedOption,
      mask: selectedOption?.mask
        ?.split("")
        .map((symbol) => (symbol === "#" ? "0" : symbol))
        .join(""),
    });

  return (
    <StyledContact>
      <Input
        value={data.client_name}
        onChange={(value) => onUpdateData("client_name", value)}
        label="Company/Business*"
        placeholder="Business or person"
        className="input"
        error={errors.includes("client_name")}
      />
      <Input
        value={data.email}
        onChange={(value) => onUpdateData("email", value)}
        label="Email"
        placeholder="name@domain.com"
        className="input"
        error={errors.includes("email")}
      />
      <Input
        value={data.phone}
        onChange={(value) => onUpdateData("phone", value)}
        label="Phone"
        placeholder={`${phoneMask.code}${phoneMask?.mask}`}
        className="input"
        selectLeft={phonesData.map((countryPhone) => ({
          title: countryPhone.iso,
          value: countryPhone.iso,
          ...countryPhone,
        }))}
        selectValue={phoneMask?.iso}
        onChangeSelect={handleSelectPhoneMask}
        mask={`${phoneMask.code}${phoneMask?.mask}`}
        error={errors.includes("phone")}
      />
      <Input
        value={data.first_name}
        onChange={(value) => onUpdateData("first_name", value)}
        label="First name"
        placeholder="Olivia"
        className="input"
        error={errors.includes("first_name")}
      />
      <Input
        value={data.last_name}
        onChange={(value) => onUpdateData("last_name", value)}
        label="Last name"
        placeholder="Fernandez"
        error={errors.includes("last_name")}
      />
    </StyledContact>
  );
};
