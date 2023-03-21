import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { LoginCard } from "./LoginCard/LoginCard";
import { Logo } from "./Logo";
import { SingUpCard } from "./SinginCard/SingUpCard";
import { Subtitle } from "./Subtitle";
import { Title } from "./Title";

export const Auth = ({ onAuth }) => {
  const { pathname } = useLocation();
  return (
    <StyledAuth>
      <Logo />
      <Title title={pathname === "/sing-up" ? "Create an account" : "Log in to your account"} />
      <Subtitle text={pathname === "/sing-up" ? "Start your 30-day free trial." : "Start your 30-day free trial."} />
      {
        pathname === "/sing-up" ? <SingUpCard onAuth={onAuth} /> : <LoginCard onAuth={onAuth} />
      }
    </StyledAuth>
  )
}

const StyledAuth = styled.div`
  width: 90%;
  max-width: 420px;
  margin: 0 auto;
`