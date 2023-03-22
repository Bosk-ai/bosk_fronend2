import { useState } from "react"
import useGetInvoices from "../../hooks/invoices/useGetInvoices"
import { Header } from "./Header"
import { InvoicesTable } from "./InvoicesTable/InvoicesTable"
import { ManageBar } from "./ManageBar"

const TABS = [
  { title: "Unpaid", value: "Unpaid" },
  { title: "Draft", value: "Draft" },
  { title: "All Invoices", value: "All Invoices" },
]

export const Invoices = () => {
  const [activeTab, setActiveTab] = useState(TABS[0]);
  const { invoices } = useGetInvoices();

  const handleChangeActiveTab = (tab) => setActiveTab(tab);

  return (
    <div>
      <Header />
      <ManageBar
        tabs={TABS}
        activeTab={activeTab}
        onChangeTab={handleChangeActiveTab}
      />
      <InvoicesTable invoices={invoices} />
    </div>
  )
}
