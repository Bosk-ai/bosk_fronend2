import { Details } from "./Details/Details"
import { Header } from "./Header"
import { MainInfo } from "./MainInfo/MainInfo"
import { Footer } from "./Footer"
import { useState } from "react"
import useGetProfile from "../../hooks/auth/useGetProfile"
import { useEffect } from "react"
import useCreateInvoice from "../../hooks/invoices/useCreateInvoice"
import useEditInvoice from "../../hooks/invoices/useEditInvoice"
import cogoToast from "cogo-toast"
import { useNavigate, useParams } from "react-router-dom"
import useGetInvoice from "../../hooks/invoices/useGetInvoice"
import { handleCheckRequiredFileds } from "../../helpers/validation"
import { handleDownload } from "../../helpers/files"
import { hostname } from "../../api/hostname"

const INIT_INVOICE_DATA = {
  name: null,
  number: "",
  provider_name: "123123", // Имя исполнителя - по дефолту весь раздел берем из        профиля
  provider_tax_id: "", // такс_айди исполнителя
  provider_lines: "", // адресс исполнителя
  issue_date: "",
  due_date: "",
  po_number: "",
  customer_id: null,
  invoice_items_attributes: [],
  subtotal: 0,
  tax: "0",
  total: 0,
  note: "",
}

const REQUIRED_FIELDS = ["customer_id", "number", "issue_date", "due_date"];

export const Invoice = () => {
  const navigate = useNavigate();
  const { invoiceId } = useParams();
  const [data, setData] = useState(INIT_INVOICE_DATA);
  const { invoice } = useGetInvoice();
  const { profile } = useGetProfile();
  const { createInvoice } = useCreateInvoice();
  const { editInvoice } = useEditInvoice();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState([]);

  const handleUpdateData = (fieldName, value) => {
    setData({ ...data, [fieldName]: value });
    errors.includes(fieldName) && setErrors(errors.filter(error => error !== fieldName));
  }

  const handleFormatData = () => {
    const subtotal = data.invoice_items_attributes.map(({ price, quantity }) => price * quantity).reduce((a, b) => a + b, 0);
    const taxValue = (subtotal / 100 * data.tax).toFixed(2);
    return ({
      ...data,
      subtotal,
      total: Number(taxValue) + subtotal,
      invoice_items_attributes: data.invoice_items_attributes.map((item, i) => ({ ...item, id: 1 + i }))
    })
  }

  const handleShowReqiredFieldsError = (emptyRequiredFields) => {
    setErrors(emptyRequiredFields);
    cogoToast.error("Please fill out all required fields", { hideAfter: 3, position: "top-right", });
  }

  const hanleCreateInvoice = () => {
    const allRequiredFilledsNotEmpty = handleCheckRequiredFileds(data, REQUIRED_FIELDS, handleShowReqiredFieldsError);
    if (allRequiredFilledsNotEmpty) {
      const formatedData = handleFormatData();
      setLoading(true);
      createInvoice(formatedData)
        .then(resp => {
          setLoading(false);
          if (resp?.status === 200) {
            cogoToast.success("Invoice has been created successfully", { hideAfter: 3, position: "top-right", });
            setLoading(false);
            handleDownload(`${hostname}/invoice_pdf/${resp.data.id}`)
            navigate("/invoices")
          } else {
            cogoToast.error("Error, invoice has not been created", { hideAfter: 3, position: "top-right", });
          }
        })
    }
  }

  const handleEditInvoice = () => {
    const allRequiredFilledsNotEmpty = handleCheckRequiredFileds(data, REQUIRED_FIELDS, handleShowReqiredFieldsError);
    if (allRequiredFilledsNotEmpty) {
      const formatedData = handleFormatData();
      setLoading(true);
      editInvoice(formatedData)
        .then(resp => {
          setLoading(false);
          if (resp?.status === 200) {
            cogoToast.success("Invoice has been updated successfully", { hideAfter: 3, position: "top-right", });
            handleDownload(`${hostname}/invoice_pdf/${invoiceId}`)
            setLoading(false);
          } else {
            cogoToast.error("Error, invoice has not been updated", { hideAfter: 3, position: "top-right", });
          }
        })
    }
  }


  useEffect(() => {
    setData({
      ...data,
      provider_name: profile?.name ?? "",
      provider_tax_id: profile?.tax_id ?? "",
      provider_lines: profile?.address ?? ""
    })
    // eslint-disable-next-line 
  }, [profile])

  useEffect(() => {
    if (invoiceId && invoice) {
      setData({
        ...data,
        name: invoice?.name ?? "",
        number: invoice?.number ?? "",
        issue_date: invoice?.issue_date ?? "",
        due_date: invoice?.due_date ?? "",
        po_number: invoice?.po_number ?? "",
        customer_id: invoice?.customer?.id,
        invoice_items_attributes: invoice?.invoice_items ?? [],
        subtotal: invoice?.subtotal ?? "",
        tax: invoice?.tax?.toString() ?? "",
        total: invoice?.total ?? "",
        note: invoice?.note ?? "",
      })
    }
    // eslint-disable-next-line 
  }, [invoice, invoiceId])

  return (
    <div>
      <Header
        onSave={() => invoiceId ? handleEditInvoice() : hanleCreateInvoice()}
        loading={loading}
      />
      <Details
        data={data}
        onUpdateData={handleUpdateData}
      />
      <MainInfo
        data={data}
        onUpdateData={handleUpdateData}
        errors={errors}
      />
      {/* <InvoiceFooter
        data={data}
        onUpdateData={handleUpdateData}
      /> */}
      <Footer
        onSave={() => invoiceId ? handleEditInvoice() : hanleCreateInvoice()}
        loading={loading}
      />
    </div>
  )
}
