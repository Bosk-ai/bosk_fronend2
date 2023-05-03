import { ItemsTable } from "./ItemsTable";

export const Items = ({ data, onUpdateData }) => (
  <div>
    <ItemsTable data={data} onUpdateData={onUpdateData} />
  </div>
);
