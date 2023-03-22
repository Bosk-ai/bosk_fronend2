import { StyledTable } from "../../constats/styles";
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
