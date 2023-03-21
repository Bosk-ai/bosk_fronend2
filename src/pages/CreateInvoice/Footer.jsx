import styled from "styled-components";
import { Button } from "../../components/Button";
import { Title } from "../../components/Title";

export const Footer = () => {
  return (
    <StyledFooter>
      <Button
        onClick={() => null}
        title="Preview"
        className="btn btn-preview"
      />
      <Button
        onClick={() => null}
        title="Save as .pdf"
        color="primary"
        className="btn"
      />
    </StyledFooter>
  )
}

const StyledFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 34px;
  .btn {
    height: 40px;
  }
  .btn-preview {
    margin-right: 12px;
  }
`