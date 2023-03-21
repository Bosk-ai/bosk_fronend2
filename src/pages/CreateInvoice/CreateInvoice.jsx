import styled from "styled-components"
import { Details } from "./Details/Details"
import { InvoiceFooter } from "./InvoiceFooter"
import { Header } from "./Header"
import { MainInfo } from "./MainInfo/MainInfo"
import { Footer } from "./Footer"

export const CreateInvoice = () => {
  return (
    <StyledCreateInvoice>
      <Header />
      <Details />
      <MainInfo />
      <InvoiceFooter />
      <Footer />
    </StyledCreateInvoice>
  )
}

const StyledCreateInvoice = styled.div`
  
`