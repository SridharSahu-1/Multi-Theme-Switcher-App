import React, { useState } from "react";
import { useAppSelector, useAppDispatch } from "../store/helpers";
import { signUp, getAuthErrorMessage } from "../firebase/auth";
import { goTo } from "../store/slices/navigationSlice";

const SignUpPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { styles } = useAppSelector((state) => state.theme);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    try {
      await signUp(email, password);
      dispatch(goTo("home"));
    } catch (err) {
      setError(getAuthErrorMessage(err));
    }
  };

  const theme = styles.auth;

  return (
    <div className={theme.container}>
      <div className={theme.form}>
        <h2 className={theme.title}>Sign Up</h2>

        <form onSubmit={handleSignUp}>
          <input
            className={theme.input}
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className={theme.input}
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            className={theme.input}
            type="password"
            placeholder="Confirm Password"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {error && <div className={theme.error}>{error}</div>}
          <button type="submit" className={theme.button}>
            Sign Up
          </button>
        </form>

        <div className={theme.divider}>or</div>
        <button className={theme.link} onClick={() => dispatch(goTo("signin"))}>
          Already have an account? Sign In
        </button>
      </div>
    </div>
  );
};

export default SignUpPage;
