import { ToggleCard } from "../../../components/ToggleCard/ToggleCard"
import { Title } from "./Title"
import { Input } from "../../../components/Input/Input";
import { Info } from "./Info";
import { Edit } from "./Edit/Edit";
import { StyledDetails } from "../../../constats/styles";

export const Details = ({ data, onUpdateData }) => {
  return (
    <ToggleCard title="Business address and contact details, title, summary, and logo">
      <StyledDetails>
        <Title />
        <Input
          value={data.name}
          onChange={(value) => onUpdateData("name", value)}
          placeholder="Summary (e.g. project name, description of invoice)"
          className="sumary-input"
        />
        <Info data={data} />
        <Edit
          data={data}
          onUpdateData={onUpdateData}
        />
      </StyledDetails>
    </ToggleCard>
  )
}

