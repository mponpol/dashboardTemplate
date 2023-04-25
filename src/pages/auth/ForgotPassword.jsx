import { Link } from 'react-router-dom';
import { RiMailLine } from 'react-icons/ri';
import './ForgotPassword.css';

function ForgotPassword() {
  return (
    <div className="login">
      <h1>Recover password</h1>

      <form className="login-form">
        <div className="email">
          <RiMailLine className="ri" />
          <input type="email" placeholder="Email"></input>
        </div>
        <div>
          <button className="submit-btn" type="submit">
            Request
          </button>
        </div>
      </form>

      <div className="forgot-password-bottom">
        <span>
          Have an account?{' '}
          <Link to="/auth" className="sign-up-link">
            Sign in
          </Link>
        </span>
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

export default ForgotPassword;
