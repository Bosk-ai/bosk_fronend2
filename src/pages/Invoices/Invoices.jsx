import cogoToast from "cogo-toast"
import { useRef } from "react"
import { useEffect } from "react"
import { useState } from "react"
import useDeleteInvoice from "../../hooks/invoices/useDeleteInvoice"
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
  const [invoices, setIvoices] = useState([]);
  const { getInvoices } = useGetInvoices();
  const { deleteInvoice } = useDeleteInvoice()
  const [page, setPage] = useState(1);
  const [isLastPage, setIsLastPage] = useState(false);
  const loading = useRef(false);

  useEffect(() => {
    getInvoices().then(resp => setIvoices(resp.data))
  }, [])

  const handleDeleteInvoice = (id) => {
    deleteInvoice(id)
      .then(resp => {
        if (resp?.status === 200) {
          cogoToast.success("Invoice has been deleted successfully", { hideAfter: 3, position: "top-right", });
          setIvoices(invoices.filter(invoice => invoice.id !== id))
        } else {
          cogoToast.error("Error, invoice has not been deleted", { hideAfter: 3, position: "top-right", });
        }
      })
  };

  const handleLoadMoreInvoices = (e) => {
    const scrolledHeight = e.target.scrollTop + e.target.clientHeight;
    const scrollHeight = e.target.scrollHeight;
    if (!loading.current && !isLastPage && ((scrolledHeight + 50) > scrollHeight)) {
      loading.current = true
      getInvoices(1 + page).then(resp => {
        const updatedInvoices = [...invoices, ...resp.data];
        setIvoices(updatedInvoices);
        setIsLastPage(resp.data?.length === 0)
        setPage(1 + page);
        loading.current = false
      });
    }
  }

  useEffect(() => {
    document.querySelector(".pages").addEventListener("scroll", handleLoadMoreInvoices)
    return () => document.querySelector(".pages").removeEventListener("scroll", handleLoadMoreInvoices)
  }, [invoices, loading])

  const handleChangeActiveTab = (tab) => setActiveTab(tab);

  return (
    <div>
      <Header />
      <ManageBar
        tabs={TABS}
        activeTab={activeTab}
        onChangeTab={handleChangeActiveTab}
      />
      <InvoicesTable invoices={invoices} onDelete={handleDeleteInvoice} />
    </div>
  )
}
