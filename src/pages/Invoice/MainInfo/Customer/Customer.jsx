import { StyledCustomer } from "../../../../constats/styles"
import { Empty } from "./Empty"
import { Info } from "./Info"

export const Customer = ({ data, onUpdateData, errors }) => {
  return (
    <StyledCustomer>
      <Empty
        data={data}
        onUpdateData={onUpdateData}
        errors={errors}
      />
      <Info
        data={data}
        onUpdateData={onUpdateData}
        errors={errors}
      />
    </StyledCustomer>
  )
}

