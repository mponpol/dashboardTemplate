import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  RiUserLine,
  RiMailLine,
  RiLockLine,
  RiEyeLine,
  RiEyeOffLine,
} from 'react-icons/ri';
import './Register.css';

function Register() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login">
      <h1>Sign up</h1>

      <form className="login-form">
        <div className="user-data">
          <RiUserLine className="ri" />
          <input type="text" placeholder="Firstname"></input>
        </div>
        <div className="user-data">
          <RiUserLine className="ri" />
          <input type="text" placeholder="Lastname"></input>
        </div>
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
        <div className="password">
          <RiLockLine className="ri" />
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Confirm password"
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
            Sign Up
          </button>
        </div>
      </form>

      <div className="bottom">
        Have an account?{' '}
        <Link to="/auth" className="sign-up-link">
          Sign in
        </Link>
      </div>
    </div>
  );
}

export default Register;
