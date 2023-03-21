import { useState } from "react"
import styled from "styled-components"
import { Input } from "../../../components/Input/Input"
import { validateEmail } from "../../../helpers/validation"
import useLogin from "../../../hooks/auth/useLogin"
import { Button } from "../Button"
import { CardFooter } from "../CardFooter"
import { Footer } from "./Footer"
import cogoToast from 'cogo-toast';
import { useNavigate } from "react-router-dom"

export const LoginCard = () => {
  const navigate = useNavigate();
  const { login } = useLogin();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChangeEmail = (value) => {
    setEmail(value);
    setErrors({ ...errors, email: validateEmail(value) ? null : "Email is not valid" });
  }

  const handleSubmit = () => {
    login({ user: { email, password } })
      .then(resp => {
        setLoading(false);
        console.log(resp)
        if (resp?.status === 200) {
          const token = resp?.headers?.authorization;
          if (token) {
            localStorage.setItem("token", token);
            window.location.replace("/");
          }
        } else {
          cogoToast.error("Error", { hideAfter: 3, position: "top-right", });
        }
      })
  }

  return (
    <>
      <StyledLoginCard>
        <Input
          value={email}
          onChange={handleChangeEmail}
          label="Email"
          placeholder="Enter your email"
          className="input-email"
          error={errors?.email}
          disabled={loading}
        />
        <Input
          value={password}
          onChange={value => setPassword(value)}
          label="Password"
          className="input-password"
          type="password"
          disabled={loading}
        />
        <Footer />
        <Button
          onClick={handleSubmit}
          text="Sign in"
          disabled={email.length === 0 || password.length < 8 || errors?.email || loading}
        />
      </StyledLoginCard>
      <CardFooter
        text="Don’t have an account?"
        linkText="Sign up"
        link="/sing-up"
      />
    </>
  )
}

const StyledLoginCard = styled.div`
  padding: 32px 40px;
  background: #FFFFFF;
  box-shadow: 0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06);
  border-radius: 12px;
  .input-email {
    margin-bottom: 20px;
  }
  .input-password {
    margin-bottom: 24px;
  }
`