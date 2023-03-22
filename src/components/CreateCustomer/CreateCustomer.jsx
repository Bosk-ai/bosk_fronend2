import { useState } from "react";
import { StyledCreateCustomer } from "../../constats/styles";
import { Modal } from "../Modal/Modal";
import { Tabs } from "../Tabs/Tabs";
import { Bilings } from "./Bilings";
import { Contact } from "./Contact";
import { More } from "./More";
import { Shipping } from "./Shipping";

const TABS = [
  { title: "Contact", value: "Contact" },
  { title: "Billing", value: "Billing" },
  { title: "Shipping", value: "Shipping" },
  { title: "More", value: "More" }
]

export const CreateCustomer = ({ open, onClose }) => {
  const [activeTab, setActiveTab] = useState(TABS[0]);

  const handleChangeTab = (tab) => setActiveTab(tab);

  return (
    <Modal
      title="New customer"
      openModal={open}
      onCloseModal={onClose}
    >
      <StyledCreateCustomer>
        <Tabs
          tabs={TABS}
          activeTab={activeTab}
          onChangeTab={handleChangeTab}
          className="tabs"
        />
        {
          activeTab.value === "Contact" ? <Contact />
            : activeTab.value === "Billing" ? <Bilings />
              : activeTab.value === "Shipping" ? <Shipping />
                : activeTab.value === "More" ? <More />
                  : null

        }
      </StyledCreateCustomer>
    </Modal>
  )
}

