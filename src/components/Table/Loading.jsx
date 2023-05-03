import { StyledTableLoading } from "../../constats/styles";
import { Preloader } from "./Preloader";

export const Loading = ({ loading }) => (
  <StyledTableLoading loading={loading}>
    <Preloader />
  </StyledTableLoading>
);
