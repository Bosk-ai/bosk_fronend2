import styled from "styled-components"
import { Table } from "../../../../components/Table/Table"
import { AddItem } from "./AddItem"
import { Footer } from "./Footer"
import { ItemRow } from "./ItemRow"
import { Notes } from "./Notes"
import { useState } from "react";
import { Empty } from "./Empty"

const INIT_ITEM = ({ description: "", quantity: 0, price: 0.0 });
const TAX_OPTIONS = [
  { title: "IVA 0%", value: 0 },
  { title: "IVA 10%", value: 10 },
  { title: "IVA 50%", value: 50 },

]

export const ItemsTable = () => {
  const [items, setItems] = useState([]);
  const [tax, setTax] = useState(TAX_OPTIONS[0])

  const handleAddItem = () => setItems([...items, INIT_ITEM]);
  const handleDeleteItem = (index) => setItems(items.filter((item, i) => i !== index));

  const handleUpdateItem = (index, field, value) => {
    setItems(items.map((item, i) => (i === index) ? ({ ...item, [field]: value }) : item))
  }

  const handleChangeTax = (value) => setTax(value);

  return (
    <StyledItemsTable>
      <Table
        columns={[
          { title: "Items", className: "items-column" },
          { title: "Quantity" },
          { title: "Price" },
          { title: "Amount" },
          { title: "" }
        ]}
      >
        {
          items.length > 0 &&
          items.map(({ description, quantity, price }, i) => (
            <ItemRow
              key={i}
              description={description}
              quantity={quantity}
              price={price}
              onChange={(field, value) => handleUpdateItem(i, field, value)}
              onDelete={() => handleDeleteItem(i)}
            />
          ))
        }
        {
          items.length > 0 &&
          <>
            <AddItem onAdd={handleAddItem} />
            <Footer
              items={items}
              tax={tax}
              onChangeTax={handleChangeTax}
              taxOptions={TAX_OPTIONS}
            />
          </>
        }
      </Table>
      {
        items.length === 0 &&
        <>
          <Empty />
          <AddItem border onAdd={handleAddItem} />
        </>
      }
      <Notes />
    </StyledItemsTable>
  )
}

const StyledItemsTable = styled.div`
  .items-column {
    width: 50%;
  }
  table {
    border-radius: 12px 12px 0 0;
  }
  th {
    text-align: left;
    line-height: 1;
    vertical-align: center;
    img {
      display: none;
    }
  }
  td {
    padding: 16px 12px;
  }
`