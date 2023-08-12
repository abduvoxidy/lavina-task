import { useState, FC } from "react";
import { setCookie } from "nookies";
import { Button, CircularProgress } from "@mui/material";

import { useForm } from "react-hook-form";

import { register, login } from "../../services/auth";
import LocalStorage from "../../utils/LocalStorage";
import CInput from "../../components/Forms/CInput";

import "./Login.scss";

interface ILoginState {
  name: string;
  email: string;
  key: string;
  secret: string;
}

const Login: FC = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { handleSubmit, control, reset } = useForm();

  const isLogged = (data: ILoginState) => {
    LocalStorage.set("isAuth", true);
    LocalStorage.set("userData", data);
    setCookie(null, "userKey", data.key, {
      secure: true,
      sameSite: "strict",
      maxAge: 30 * 24 * 60 * 60,
      path: "/",
    });
    setCookie(null, "userSecret", data.secret, {
      secure: true,
      sameSite: "strict",
      maxAge: 30 * 24 * 60 * 60,
      path: "/",
    });
    location.reload();
  };

  const onSubmit = (values: any) => {
    setIsLoading(true);
    if (isSignup) {
      register(values)
        .then((res) => {
          if (res.data.isOk === true) {
            isLogged(res.data.data);
            reset({
              name: "",
              email: "",
              key: "",
              secret: "",
            });
          }
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      login(values.key, values.secret)
        .then((res) => {
          if (res.data.isOk === true) {
            isLogged(res.data.data);
          }
          reset({
            key: "",
            secret: "",
          });
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  return (
    <div className="login">
      <div className="left">
        <div className="content">
          <div className="title">
            {isSignup ? "Ro'yxatdan o'tish" : "Kirish"}
          </div>
          <div className="action">
            <p onClick={() => setIsSignup(!isSignup)}>
              {isSignup ? "Kirish" : "Ro'yxatdan o'tish"}
            </p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="form">
            {isSignup && (
              <>
                <CInput
                  placeholder="Name"
                  labelText="Name"
                  name="name"
                  control={control}
                  required
                />
                <CInput
                  placeholder="Email"
                  labelText="Email"
                  name="email"
                  control={control}
                  required
                />
              </>
            )}
            <CInput
              placeholder="Username"
              labelText="Username"
              name="key"
              control={control}
              required
            />
            <CInput
              placeholder="Password"
              labelText="Password"
              name="secret"
              control={control}
              required
              type="password"
            />
            <Button
              className="button"
              size="large"
              type="submit"
              variant="contained"
            >
              {isLoading ? (
                <CircularProgress />
              ) : isSignup ? (
                "Ro'yxatdan o'tish"
              ) : (
                "Kirish"
              )}
            </Button>
          </form>
        </div>
      </div>
      <div className="right">
        <div className="welcome">Online Kutubxona!</div>
      </div>
    </div>
  );
};

export default Login;
