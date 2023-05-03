import { StyledBackButton } from "../../constats/styles";
import arrowLeft from "../../assets/images/arrow-left.svg";
import { Link } from "react-router-dom";

export const BackButton = () => {
  return (
    <Link to={"/invoices"}>
      <StyledBackButton>
        <img src={arrowLeft} alt="" />
      </StyledBackButton>
    </Link>
  );
};
