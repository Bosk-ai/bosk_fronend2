import { StyledCustomer } from "../../../../constats/styles";
import { Empty } from "./Empty";
import { Info } from "./Info";

export const Customer = ({ data, onUpdateData, errors, onGetAdvise }) => {
  return (
    <StyledCustomer>
      <Empty
        data={data}
        onUpdateData={onUpdateData}
        errors={errors}
        onGetAdvise={onGetAdvise}
      />
      <Info data={data} onUpdateData={onUpdateData} errors={errors} />
    </StyledCustomer>
  );
};
