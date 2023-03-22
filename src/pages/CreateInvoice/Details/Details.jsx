import { ToggleCard } from "../../../components/ToggleCard/ToggleCard"
import { Title } from "./Title"
import { Input } from "../../../components/Input/Input";
import { Info } from "./Info";
import { Edit } from "./Edit/Edit";
import { StyledDetails } from "../../../constats/styles";

export const Details = () => {
  return (
    <ToggleCard title="Business address and contact details, title, summary, and logo">
      <StyledDetails>
        <Title />
        <Input
          value={""}
          onChange={() => null}
          placeholder="Summary (e.g. project name, description of invoice)"
          className="sumary-input"
        />
        <Info />
        <Edit />
      </StyledDetails>
    </ToggleCard>
  )
}

