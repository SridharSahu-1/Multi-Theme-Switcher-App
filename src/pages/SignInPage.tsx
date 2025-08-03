import React, { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { signIn, getAuthErrorMessage } from '../firebase/auth';
import { goTo } from '../store/slices/navigationSlice';

const SignInPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { styles } = useAppSelector((state) => state.theme);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      await signIn(email, password);
      dispatch(goTo('home'));
    } catch (err) {
      setError(getAuthErrorMessage(err));
    }
  };

  const theme = styles.auth;

  return (
    <div className={theme.container}>
      <div className={theme.form}>
        <h2 className={theme.title}>Sign In</h2>

        <form onSubmit={handleSignIn}>
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
          {error && <div className={theme.error}>{error}</div>}
          <button type="submit" className={theme.button}>
            Sign In
          </button>
        </form>

        <div className={theme.divider}>or</div>
        <button
          className={theme.link}
          onClick={() => dispatch(goTo('signup'))}
        >
          Create an Account
        </button>
      </div>
    </div>
  );
};

export default SignInPage;

