import { Details } from "./Details/Details";
import { Header } from "./Header";
import { MainInfo } from "./MainInfo/MainInfo";
import { Footer } from "./Footer";
import { InvoiceFooter } from "./InvoiceFooter";
import { useState } from "react";
import useGetProfile from "../../hooks/auth/useGetProfile";
import { useEffect } from "react";
import useCreateInvoice from "../../hooks/invoices/useCreateInvoice";
import useEditInvoice from "../../hooks/invoices/useEditInvoice";
import cogoToast from "cogo-toast";
import { useNavigate, useParams } from "react-router-dom";
import useGetInvoice from "../../hooks/invoices/useGetInvoice";
import { handleCheckRequiredFileds } from "../../helpers/validation";
import { handleDownload } from "../../helpers/files";
import { hostname } from "../../api/hostname";
import useChangeInvoiceStatus from "../../hooks/invoices/useChangeInvoiceStatus";
import useGetAdvise from "../../hooks/invoices/useGetAdvise";

const INIT_INVOICE_DATA = {
  name: null,
  number: "",
  provider_name: "",
  provider_tax_id: "",
  provider_lines: "",
  issue_date: "",
  due_date: "",
  po_number: "",
  customer_id: null,
  invoice_items_attributes: [],
  subtotal: 0,
  tax: 0,
  total: 0,
  note: "",
};

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
  const [status, setStatus] = useState("draft");
  const { changeInvoiceStatus } = useChangeInvoiceStatus();
  const [advise, setAdvise] = useState(null);
  const { getAdvise } = useGetAdvise();

  const handleGetAdvise = (countryCode) => {
    if (countryCode) {
      getAdvise(countryCode).then((resp) => {
        setAdvise(resp?.data?.Footer?.length > 0 ? resp?.data?.Footer : null);
        setData({ ...data, tax: resp?.data?.VAT });
      });
    } else {
      setAdvise(null);
    }
  };

  const handleChangeStatus = () => {
    changeInvoiceStatus(invoiceId, status).then(() => {
      handleDownload(`${hostname}/invoice_pdf/${invoiceId}`);
      setLoading(false);
    });
  };

  const handleUpdateData = (fieldName, value) => {
    setData({ ...data, [fieldName]: value });
    errors.includes(fieldName) &&
      setErrors(errors.filter((error) => error !== fieldName));
  };

  const handleFormatData = () => {
    const subtotal = data.invoice_items_attributes
      .map(({ price, quantity }) => price * quantity)
      .reduce((a, b) => a + b, 0);
    const taxValue = ((subtotal / 100) * data.tax).toFixed(2);
    return {
      ...data,
      subtotal,
      total: Number(taxValue) + subtotal,
      invoice_items_attributes: data.invoice_items_attributes.map(
        (item, i) => ({ ...item, id: 1 + i })
      ),
    };
  };

  const handleShowReqiredFieldsError = (emptyRequiredFields) => {
    setErrors(emptyRequiredFields);
    cogoToast.error("Please fill out all required fields", {
      hideAfter: 3,
      position: "top-right",
    });
  };

  const hanleCreateInvoice = () => {
    const allRequiredFilledsNotEmpty = handleCheckRequiredFileds(
      data,
      REQUIRED_FIELDS,
      handleShowReqiredFieldsError
    );
    if (allRequiredFilledsNotEmpty) {
      const formatedData = handleFormatData();
      setLoading(true);
      createInvoice(formatedData).then((resp) => {
        setLoading(false);
        if (resp?.status === 200) {
          cogoToast.success("Invoice has been created successfully", {
            hideAfter: 3,
            position: "top-right",
          });
          setLoading(false);
          handleDownload(`${hostname}/invoice_pdf/${resp.data.id}`);
          navigate("/invoices");
        } else {
          cogoToast.error("Error, invoice has not been created", {
            hideAfter: 3,
            position: "top-right",
          });
        }
      });
    }
  };

  const handleEditInvoice = () => {
    const allRequiredFilledsNotEmpty = handleCheckRequiredFileds(
      data,
      REQUIRED_FIELDS,
      handleShowReqiredFieldsError
    );
    if (allRequiredFilledsNotEmpty) {
      const formatedData = handleFormatData();
      setLoading(true);
      editInvoice(formatedData).then((resp) => {
        setLoading(false);
        if (resp?.status === 200) {
          handleChangeStatus();
          cogoToast.success("Invoice has been updated successfully", {
            hideAfter: 3,
            position: "top-right",
          });
        } else {
          cogoToast.error("Error, invoice has not been updated", {
            hideAfter: 3,
            position: "top-right",
          });
        }
      });
    }
  };

  useEffect(() => {
    setData({
      ...data,
      provider_name: profile?.name ?? "",
      provider_tax_id: profile?.tax_id ?? "",
      provider_lines: profile?.address ?? "",
    });
    // eslint-disable-next-line
  }, [profile]);

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
      });
      setStatus(invoice?.status?.toLowerCase() ?? "draft");
      invoice.customer?.country && handleGetAdvise(invoice.customer?.country);
    }
    // eslint-disable-next-line
  }, [invoice, invoiceId]);

  return (
    <div>
      <Header
        invoiceId={invoiceId}
        name={data?.name?.length > 0 ? data?.name : "Edit invoice"}
        onSave={() => (invoiceId ? handleEditInvoice() : hanleCreateInvoice())}
        loading={loading}
        status={status}
        onChangeStatus={(s) => setStatus(s)}
      />
      <Details data={data} onUpdateData={handleUpdateData} />
      <MainInfo
        data={data}
        onUpdateData={handleUpdateData}
        errors={errors}
        onGetAdvise={handleGetAdvise}
      />
      <InvoiceFooter
        data={data}
        onUpdateData={handleUpdateData}
        advise={advise}
        onCloseAdvise={() => setAdvise(null)}
      />
      <Footer
        onSave={() => (invoiceId ? handleEditInvoice() : hanleCreateInvoice())}
        loading={loading}
      />
    </div>
  );
};
