import { useLocation } from "react-router-dom";
import { StyledAuth } from "../../constats/styles";
import { LoginCard } from "./LoginCard/LoginCard";
import { Logo } from "./Logo";
import { SingUpCard } from "./SingUpCard/SingUpCard";
import { Subtitle } from "./Subtitle";
import { Title } from "./Title";

export const Auth = ({ onAuth }) => {
  const { pathname } = useLocation();
  return (
    <StyledAuth>
      <Logo />
      <Title
        title={
          pathname === "/sing-up"
            ? "Create an account"
            : "Log in to your account"
        }
      />
      <Subtitle
        text={
          pathname === "/sing-up"
            ? "Start your 30-day free trial."
            : "Start your 30-day free trial."
        }
      />
      {pathname === "/sing-up" ? (
        <SingUpCard onAuth={onAuth} />
      ) : (
        <LoginCard onAuth={onAuth} />
      )}
    </StyledAuth>
  );
};
