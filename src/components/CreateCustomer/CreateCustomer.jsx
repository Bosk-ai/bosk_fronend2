import { useState } from "react";
import { StyledCreateCustomer } from "../../constats/styles";
import useCreateCustomer from "../../hooks/customers/useCreateCustomer";
import useEditCustomer from "../../hooks/customers/useEditCustomer";
import { Modal } from "../Modal/Modal";
import { Tabs } from "../Tabs/Tabs";
import { Bilings } from "./Bilings";
import { Contact } from "./Contact";
import { More } from "./More";
import { Shipping } from "./Shipping";
import cogoToast from 'cogo-toast';
import { useEffect } from "react";

const TABS = [
  { title: "Contact", value: "Contact" },
  { title: "Billing", value: "Billing" },
  // { title: "Shipping", value: "Shipping" },
  { title: "More", value: "More" }
]

const INIT_CUSTOMER = ({
  client_name: "",
  phone: "",
  email: "",
  first_name: "",
  last_name: "",
  currency: "EUR",
  address_1: "",
  address_2: "",
  city: "",
  postal_code: "",
  country: "",
  province: "",
  website: "",
  notes: ""
});

const REQUIRED_FIELDS = ["client_name", "currency", "address_1", "city", "postal_code", "country"];

export const CreateCustomer = ({
  open,
  onClose,
  selectedCustomer,
  onUpdateCustomer,
  onCreatedCustomer
}) => {
  const [activeTab, setActiveTab] = useState(TABS[0]);
  const [data, setData] = useState(INIT_CUSTOMER)
  const { createCustomer } = useCreateCustomer();
  const { editCustomer } = useEditCustomer();
  const [loading, setLoading] = useState(false);
  const [errors, setSetErrors] = useState([]);

  const handleChangeTab = (tab) => setActiveTab(tab);
  const handleClose = () => {
    setLoading(false);
    onClose();
    setData(INIT_CUSTOMER)
  }

  const handleUpdateData = (fieldName, value) => {
    setData({ ...data, [fieldName]: value });
    errors.includes(fieldName) && setSetErrors(errors.filter(error => error !== fieldName));
  };

  const handleShowReqiredFieldsError = (emptyRequiredFields) => {
    setSetErrors(emptyRequiredFields);
    cogoToast.error("Please fill out all required fields", { hideAfter: 3, position: "top-right", });

    if (emptyRequiredFields.includes("client_name")) {
      setActiveTab(TABS[0])
    } else {
      setActiveTab(TABS[1]);
    }
  }

  const handleCheckRequiredFileds = () => {
    let emptyRequiredFields = [];

    Object.entries(data).forEach(field => {
      if (REQUIRED_FIELDS.includes(field[0]) && field[1].length === 0) {
        emptyRequiredFields = [...emptyRequiredFields, field[0]]
      }
    })

    if (emptyRequiredFields.length > 0) {
      handleShowReqiredFieldsError(emptyRequiredFields);
      return false;
    }

    return true
  }

  const handleCreateCustomer = () => {
    const allRequiredFilledsNotEmpty = handleCheckRequiredFileds()
    if (allRequiredFilledsNotEmpty) {
      setLoading(true);
      createCustomer(data)
        .then(resp => {
          setLoading(false);
          if (resp?.status === 201) {
            onCreatedCustomer(resp?.data)
            cogoToast.success("Customer has been created successfully", { hideAfter: 3, position: "top-right", });
            handleClose()
          } else {
            cogoToast.error("Error, customer has not been created", { hideAfter: 3, position: "top-right", });
          }
        })
    }
  }

  const handleEditUser = () => {
    const allRequiredFilledsNotEmpty = handleCheckRequiredFileds()
    if (allRequiredFilledsNotEmpty) {
      setLoading(true);
      editCustomer(data)
        .then(resp => {
          setLoading(false);
          if (resp?.status === 200) {
            onUpdateCustomer(resp?.data)
            cogoToast.success("Customer has been updated successfully", { hideAfter: 3, position: "top-right", });
            handleClose()
          } else {
            cogoToast.error("Error, customer has not been updated", { hideAfter: 3, position: "top-right", });
          }
        })
    }
  }

  useEffect(() => {
    if (selectedCustomer) {
      setData(selectedCustomer)
    }
  }, [selectedCustomer])

  return (
    <Modal
      title="New customer"
      openModal={open}
      onCloseModal={handleClose}
      onSave={() => selectedCustomer ? handleEditUser() : handleCreateCustomer()}
      loading={loading}
    >
      <StyledCreateCustomer>
        <Tabs
          tabs={TABS}
          activeTab={activeTab}
          onChangeTab={handleChangeTab}
          className="tabs"
        />
        {
          activeTab.value === "Contact" ? <Contact data={data} onUpdateData={handleUpdateData} errors={errors} />
            : activeTab.value === "Billing" ? <Bilings data={data} onUpdateData={handleUpdateData} errors={errors} />
              // : activeTab.value === "Shipping" ? <Shipping />
              : activeTab.value === "More" ? <More data={data} onUpdateData={handleUpdateData} />
                : null

        }
      </StyledCreateCustomer>
    </Modal>
  )
}

