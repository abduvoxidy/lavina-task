import { Button } from "@mui/material";
import { useState } from "react";
import { register, login } from "../../services/auth";
import { setCookie } from "nookies";
import LocalStorage from "../../utils/LocalStorage";

import "./Auth.scss";
import InputField from "../../components/InputField";

interface ILoginState {
  name: string;
  email: string;
  key: string;
  secret: string;
}

const Login: React.FunctionComponent = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [user, setUser] = useState<ILoginState>({
    name: "",
    email: "",
    key: "",
    secret: "",
  });

  const handleChange = (data: ILoginState) => {
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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSignup) {
      register(user).then((response) => {
        if (response.data.isOk === true) {
          handleChange(response.data.data);
        }
      });
    } else {
      login(user.key, user.secret).then((response) => {
        if (response.data.isOk === true) {
          handleChange(response.data.data);
        }
      });
    }
  };

  return (
    <div className="login">
      {/* Left Side */}
      <div className="left">
        <h2>Kutubxona</h2>
        <div className="content">
          <div className="title">{isSignup ? "Sign up" : "Log in"}</div>
          <div className="action">
            {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
            <button onClick={() => setIsSignup(!isSignup)}>
              {isSignup ? "Log in" : "Sign up"}
            </button>
          </div>
          <form onSubmit={handleSubmit} className="form">
            {isSignup && (
              <>
                <InputField
                  required
                  label="Name"
                  value={user.name}
                  onChange={(event) =>
                    setUser({ ...user, name: event.target.value })
                  }
                />
                <InputField
                  required
                  label="Email"
                  value={user.email}
                  onChange={(event) =>
                    setUser({ ...user, email: event.target.value })
                  }
                />
              </>
            )}
            <InputField
              required
              label="Username"
              value={user.key}
              onChange={(event) =>
                setUser({ ...user, key: event.target.value })
              }
            />
            <InputField
              required
              type="password"
              label="Password"
              value={user.secret}
              onChange={(event) =>
                setUser({ ...user, secret: event.target.value })
              }
            />
            <Button size="large" type="submit" variant="contained">
              {isSignup ? "Sign up" : "Log in"}
            </Button>
          </form>
        </div>
      </div>
      {/* Right Side */}
      <div className="right">
        <div className="welcome">Online Kutubxonaga xush kelibsiz!</div>
      </div>
    </div>
  );
};

export default Login;
