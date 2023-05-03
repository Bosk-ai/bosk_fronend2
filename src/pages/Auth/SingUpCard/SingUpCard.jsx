import { useState } from "react";
import { Input } from "../../../components/Input/Input";
import { validateEmail } from "../../../helpers/validation";
import useCreateAccount from "../../../hooks/auth/useCreateAccount";
import { Button } from "../Button";
import { CardFooter } from "../CardFooter";
import { Footer } from "./Footer";
import cogoToast from "cogo-toast";
import { StyledSingUpCard } from "../../../constats/styles";

export const SingUpCard = () => {
  const { createAccount } = useCreateAccount();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChangeEmail = (value) => {
    setEmail(value);
    setErrors({
      ...errors,
      email: validateEmail(value) ? null : "Email is not valid",
    });
  };

  const handleSubmit = () => {
    setLoading(true);
    createAccount({ user: { name, email, password } }).then((resp) => {
      setLoading(false);
      if (resp?.status === 200) {
        cogoToast.success("Account created successfully", {
          hideAfter: 2,
          position: "top-right",
        });
        const token = resp?.headers?.authorization;
        if (token) {
          localStorage.setItem("token", token);
          window.location.replace("/");
        }
      } else {
        cogoToast.error("That email address is already in use", {
          hideAfter: 3,
          position: "top-right",
        });
      }
    });
  };

  return (
    <>
      <StyledSingUpCard>
        <Input
          value={name}
          onChange={(value) => setName(value)}
          label="Name*"
          placeholder="Enter your name"
          className="input"
          disabled={loading}
        />
        <Input
          value={email}
          onChange={handleChangeEmail}
          label="Email*"
          placeholder="Enter your email"
          className="input"
          error={errors?.email}
          disabled={loading}
        />
        <Input
          value={password}
          onChange={(value) => setPassword(value)}
          label="Password*"
          className="input-password"
          placeholder="Create a password"
          type="password"
          disabled={loading}
        />
        <Footer />
        <Button
          onClick={handleSubmit}
          text="Get started"
          disabled={
            name.length === 0 ||
            email.length === 0 ||
            password.length < 8 ||
            errors?.email ||
            loading
          }
        />
      </StyledSingUpCard>
      <CardFooter
        text="Already have an account?"
        linkText="Log in"
        link="/login"
      />
    </>
  );
};
