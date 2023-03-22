import { Details } from "./Details/Details"
import { InvoiceFooter } from "./InvoiceFooter"
import { Header } from "./Header"
import { MainInfo } from "./MainInfo/MainInfo"
import { Footer } from "./Footer"

export const CreateInvoice = () => (
  <div>
    <Header />
    <Details />
    <MainInfo />
    <InvoiceFooter />
    <Footer />
  </div>
)
