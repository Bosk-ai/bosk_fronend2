import styled from "styled-components";
import { Header } from "./Header";
import { Loading } from "./Loading";

export const Table = ({ columns, children, loading }) => {
  return (
    <StyledTable>
      <Header columns={columns} />
      <Loading loading={loading} />
      {children}
    </StyledTable>
  )
}

const StyledTable = styled.table`
  width: 100%;
  border-spacing: 0;
  font-family: 'Archivo', sans-serif !important;
  position: relative;
  overflow: auto;
  border: 1px solid #EAECF0;
  border-radius: 12px;
  td {
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    color: #475467;
    text-align: center;
    padding: 25px 0;
    border-bottom: 1px solid #EAECF0;
    b {
      font-weight: 600;
      font-size: 14px;
      line-height: 20px;
      color: #475467;
    }
    .large {
      font-size: 20px;
    }
    .red {
      color: #F04438;
    }
  }
  .no-borders td {
    border: none !important;
  }
`
