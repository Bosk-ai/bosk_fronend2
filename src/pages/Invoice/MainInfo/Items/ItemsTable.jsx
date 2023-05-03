import { Table } from "../../../../components/Table/Table";
import { AddItem } from "./AddItem";
import { Footer } from "./Footer";
import { ItemRow } from "./ItemRow";
import { Notes } from "./Notes";
import { useState } from "react";
import { Empty } from "./Empty";
import { StyledItemsTable } from "../../../../constats/styles";
import { useEffect } from "react";

const INIT_ITEM = {
  id: 1,
  name: "",
  quantity: 0,
  price: 0,
  amount: 0,
  unit: "hours",
};

const TAX_OPTIONS = [
  { title: "IVA 0%", value: "0" },
  { title: "IVA 10%", value: "10" },
  { title: "IVA 50%", value: "50" },
];

export const ItemsTable = ({ data, onUpdateData }) => {
  const [items, setItems] = useState([]);

  const handleAddItem = () => {
    const updatedData = [...items, INIT_ITEM];
    setItems(updatedData);
    onUpdateData("invoice_items_attributes", updatedData);
  };
  const handleDeleteItem = (index) => {
    const updatedData = items.filter((item, i) => i !== index);
    setItems(updatedData);
    onUpdateData("invoice_items_attributes", updatedData);
  };

  const handleUpdateItem = (index, field, value) => {
    const updatedData = items.map((item, i) =>
      i === index
        ? {
            ...item,
            [field]: value,
            amount: Number(item.quantity) * Number(item.price),
          }
        : item
    );
    setItems(updatedData);
    onUpdateData("invoice_items_attributes", updatedData);
  };

  const handleChangeTax = (opt) => {
    onUpdateData("tax", opt.value);
  };

  useEffect(() => {
    setItems(data.invoice_items_attributes);
  }, [data]);

  return (
    <StyledItemsTable>
      <Table
        columns={[
          { title: "Items", className: "items-column" },
          { title: "Quantity" },
          { title: "Price" },
          { title: "Amount" },
          { title: "" },
        ]}
      >
        {items.length > 0 &&
          items.map(({ name, quantity, price }, i) => (
            <ItemRow
              key={i}
              name={name}
              quantity={quantity}
              price={price}
              amount={quantity * price}
              onChange={(field, value) => handleUpdateItem(i, field, value)}
              onDelete={() => handleDeleteItem(i)}
            />
          ))}
        {items.length > 0 && (
          <>
            <AddItem onAdd={handleAddItem} />
            <Footer
              items={items}
              tax={data.tax}
              onChangeTax={handleChangeTax}
              taxOptions={TAX_OPTIONS}
            />
          </>
        )}
      </Table>
      {items.length === 0 && (
        <>
          <Empty />
          <AddItem border onAdd={handleAddItem} />
        </>
      )}
      <Notes data={data} onUpdateData={onUpdateData} />
    </StyledItemsTable>
  );
};
