import styled from "styled-components";
import { Button } from "../../components/Button";
import { Title } from "../../components/Title";

export const Header = () => {

  return (
    <StyledHeader>
      <Title title="New invoice" />
      <div className="btns-wrapper">
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
      </div>
    </StyledHeader>
  )
}

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 34px;
  .btns-wrapper{
    display: flex;
    align-items: center;
  }
  .btn {
    height: 40px;
  }
  .btn-preview {
    margin-right: 12px;
  }
`