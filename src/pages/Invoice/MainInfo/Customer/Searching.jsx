import searchIcon from "../../../../assets/images/search-full.svg";
import { useState } from "react";
import { CreateCustomer } from "../../../../components/CreateCustomer/CreateCustomer";
import { Input } from "../../../../components/Input/Input";
import { Dropdown } from "../../../../components/Dropdown";
import { CreateButton } from "./CreateButton";
import { StyledCreateInvoiceSearching } from "../../../../constats/styles";

export const Searching = ({
  customers = [],
  selectedCustomer,
  onUpdateData,
  onEndSearch,
  onRefreshCustomersData,
  error,
  onGetAdvise,
}) => {
  const [focused, setFocused] = useState(false);
  const [modal, setModal] = useState(false);
  const [search, setSearch] = useState("");

  const handleCloseModal = () => {
    setModal(false);
    onRefreshCustomersData();
  };

  const handleSelectCustomer = (opt) => {
    onGetAdvise(opt.country);
    onUpdateData("customer_id", opt.value);
    setSearch("");
    onEndSearch();
  };

  return (
    <>
      <CreateCustomer open={modal} onClose={handleCloseModal} />
      <StyledCreateInvoiceSearching>
        <Input
          value={search}
          onChange={(value) => setSearch(value)}
          iconRight={searchIcon}
          placeholder="Type a customer name"
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          error={error}
        />
        <Dropdown
          options={customers.filter(({ title }) =>
            search?.length === 0
              ? true
              : title.toLowerCase().includes(search.toLowerCase())
          )}
          onSelectOption={handleSelectCustomer}
          open={focused}
          selected={selectedCustomer}
          showSelected
          footer={<CreateButton onClick={() => setModal(true)} />}
        />
        <div className="selected-customer">
          <div className="selected-customer-label">Customer: </div>
          {customers.find(({ value }) => value === selectedCustomer)?.title ??
            ""}
        </div>
      </StyledCreateInvoiceSearching>
    </>
  );
};
