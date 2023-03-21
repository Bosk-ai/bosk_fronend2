import styled from "styled-components"
import { Select } from "../../../../components/Select/Select"

export const Footer = ({ items, tax, onChangeTax, taxOptions }) => {
  const total = items.map(({ price, quantity }) => price * quantity).reduce((a, b) => a + b, 0);
  const taxValue = (total / 100 * tax.value).toFixed(2);

  return (
    <>
      <tr className="no-borders">
        <td></td>
        <td></td>
        <td><b>Subtotal</b></td>
        <td><b>€{total}</b></td>
        <td></td>
      </tr>
      <tr className="no-borders">
        <td></td>
        <td></td>
        <td>
          <StyledTax>
            <b>Tax</b>
            <Select
              value={tax}
              onChange={(value) => onChangeTax(value)}
              options={taxOptions}
              className="select"
            />
          </StyledTax>
        </td>
        <td><b>€{taxValue}</b></td>
        <td></td>
      </tr>
      <tr className="no-borders">
        <td></td>
        <td></td>
        <td><b>Total</b></td>
        <td><b className="large">€{total + taxValue}</b></td>
        <td></td>
      </tr>
    </>
  )
}

const StyledTax = styled.div`
  display: flex;
  align-items: center;
  b {
    margin-right: 8px;
  }
  .select {
    width: 160px;
  }
`