import { Input } from "../../../../components/Input/Input"
import { StyledContact } from "../../../../constats/styles"

const PHONE_OPTIONS = [
  { title: "ES", value: "1" },
  { title: "ES2", value: "2" },
  { title: "ES3", value: "3" },
]

export const Contact = () => (
  <StyledContact>
    <Input
      value={""}
      onChange={() => null}
      label="Company/Business"
      placeholder="Business or person"
      className="input"
    />
    <Input
      value={""}
      onChange={() => null}
      label="Email"
      placeholder="name@domain.com"
      className="input"
    />
    <Input
      value={""}
      onChange={() => null}
      label="Phone"
      placeholder="+34 000 000 000"
      className="input"
      selectLeft={PHONE_OPTIONS}
      selectValue={"ES"}
      onChangeSelect={() => null}
    />
    <Input
      value={""}
      onChange={() => null}
      label="First name"
      placeholder="Olivia"
      className="input"
    />
    <Input
      value={""}
      onChange={() => null}
      label="Last name"
      placeholder="Fernandez"
    />
  </StyledContact>
)
