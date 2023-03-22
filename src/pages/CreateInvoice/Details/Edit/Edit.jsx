import { useState } from "react";
import { Modal } from "../../../../components/Modal/Modal";
import { Tabs } from "../../../../components/Tabs/Tabs";
import { StyledCreateInvoiceDetailEdit } from "../../../../constats/styles";
import { Bilings } from "./Bilings";
import { Contact } from "./Contact";
import { EditButton } from "./EditButton";
import { More } from "./More";
import { Shipping } from "./Shipping";

const TABS = [
  { title: "Contact", value: "Contact" },
  { title: "Billing", value: "Billing" },
  { title: "Shipping", value: "Shipping" },
  { title: "More", value: "More" }
]

export const Edit = () => {
  const [activeTab, setActiveTab] = useState(TABS[0]);

  const handleChangeTab = (tab) => setActiveTab(tab);

  return (
    <Modal
      title="Edit business details"
      button={<EditButton />}
    >
      <StyledCreateInvoiceDetailEdit>
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
      </StyledCreateInvoiceDetailEdit>
    </Modal>
  )
}

