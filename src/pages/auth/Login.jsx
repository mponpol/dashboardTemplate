import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  RiMailLine,
  RiLockLine,
  RiEyeLine,
  RiEyeOffLine,
} from 'react-icons/ri';
import './Login.css';

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login">
      <h1>Login</h1>

      <form className="login-form">
        <button className="google-btn">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/706px-Google_%22G%22_Logo.svg.png" />{' '}
          Continue with Google
        </button>
        <div className="email">
          <RiMailLine className="ri" />
          <input type="email" placeholder="Email"></input>
        </div>
        <div className="password">
          <RiLockLine className="ri" />
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
          ></input>
          {showPassword ? (
            <RiEyeOffLine
              onClick={() => setShowPassword(!showPassword)}
              className="ri-eye-icon"
            />
          ) : (
            <RiEyeLine
              onClick={() => setShowPassword(!showPassword)}
              className="ri-eye-icon"
            />
          )}
        </div>
        <div>
          <button className="submit-btn" type="submit">
            Log In
          </button>
        </div>
      </form>

      <div className="bottom">
        <Link to="/" className="forgot-password-link">
          Forgot password?
        </Link>
        <span>
          New to dashboard?{' '}
          <Link to="/auth/register" className="sign-up-link">
            Sign up
          </Link>
        </span>
      </div>
    </div>
  );
}

export default Login;
