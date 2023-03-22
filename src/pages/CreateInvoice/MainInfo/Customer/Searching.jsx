import searchIcon from "../../../../assets/images/search-full.svg";
import { useState } from "react";
import { CreateCustomer } from "../../../../components/CreateCustomer/CreateCustomer";
import { Input } from "../../../../components/Input/Input";
import { Dropdown } from "../../../../components/Dropdown";
import { CreateButton } from "./CreateButton";
import { StyledCreateInvoiceSearching } from "../../../../constats/styles";

const TEST_OPTIONS = [
  { title: "Customer 1", value: "1" },
  { title: "Customer 2", value: "2" },
  { title: "Customer 3", value: "3" },
  { title: "Customer 4", value: "4" },
  { title: "Customer 5", value: "5" },
  { title: "Customer 6", value: "6" },
  { title: "Customer 7", value: "7" },
  { title: "Customer 8", value: "8" },
]

export const Searching = () => {
  const [focused, setFocused] = useState(false);
  const [modal, setModal] = useState(false);

  const handleCloseModal = () => setModal(modal);

  return (
    <>
      <CreateCustomer open={modal} onClose={handleCloseModal} />
      <StyledCreateInvoiceSearching>
        <Input
          value={""}
          onChange={() => null}
          iconRight={searchIcon}
          placeholder="Type a customer name"
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
        <Dropdown
          options={TEST_OPTIONS}
          onSelectOption
          open={focused}
          selected={{ title: "Customer 1", value: "1" }}
          showSelected
          footer={<CreateButton onClick={() => setModal(true)} />}
        />
      </StyledCreateInvoiceSearching>
    </>
  )
}
