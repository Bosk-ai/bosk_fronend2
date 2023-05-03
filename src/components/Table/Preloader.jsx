import spinnerIcon from "../../assets/images/spinner.svg";
import { StyledTablePreloader } from "../../constats/styles";

export const Preloader = ({ className }) => (
  <StyledTablePreloader className={className}>
    <img src={spinnerIcon} alt="" />
  </StyledTablePreloader>
);
