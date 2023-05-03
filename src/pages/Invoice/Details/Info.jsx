import { StyledCreateInvoiceDetailsInfo } from "../../../constats/styles";

export const Info = ({ data }) => (
  <StyledCreateInvoiceDetailsInfo>
    <div className="name">{data?.provider_name}</div>
    <div>Tax number (NIE): {data?.provider_tax_id}</div>
    <div> {data?.provider_lines}</div>
  </StyledCreateInvoiceDetailsInfo>
);
