import { useDispatch, useSelector } from 'react-redux';
import { setToken } from '../../redux/actions/tokenActions';
import { persistToken } from '../../redux/redux-persist';
import { setEmail, setPassword, clearForm } from '../../redux/auth/authSlice';
import style from './LoginForm.module.css';
import { useNavigate } from 'react-router-dom';

const useEmailValidation = (email) => {
  if (!email || email.length === 0) {
    return 'Email cannot be empty';
  }

  const isEmailValid = /@/.test(email); // use any validator you want
  if (!isEmailValid) {
    return 'Invalid email provided';
  }

  return null;
};

const usePasswordValidation = (password) => {
  if (!password || password.length < 6) {
    return 'Password must be at least 6 characters';
  }

  return null;
};

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const email = useSelector((state) => state.auth.email);
  const password = useSelector((state) => state.auth.password);

  const emailError = useEmailValidation(email);
  const passwordError = usePasswordValidation(password);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      alert('Email must not be empty');
      return;
    }

    if (!password) {
      alert('Password must not be empty');
      return;
    }

    if (!emailError && !passwordError) {
      const mockToken = 'mock-auth-token'; // Burada API'den dönen token olmalı ancak hala daha invalid hatası alıyorum?
      dispatch(setToken(mockToken));
      await persistToken(mockToken);
      navigate('/contacts');
    } else {
      alert('Invalid email or password');
    }

    // Formu temizle
    dispatch(clearForm());
  };

  return (
    <div className={style.container}>
      <h1 className={style.title}>Login</h1>
      <form onSubmit={handleSubmit} className={style.form}>
        <div className={style.formAlt}>
          <label className={style.formAltLabel}>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => dispatch(setEmail(e.target.value))}
            className={`${style.formAltInput} ${emailError ? style.invalid : ''}`}
          />
          {emailError && <span className={style.error}>{emailError}</span>}
        </div>
        <div className={style.formAlt}>
          <label className={style.formAltLabel}>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => dispatch(setPassword(e.target.value))}
            className={`${style.formAltInput} ${passwordError ? style.invalid : ''}`}
          />
          {passwordError && <span className={style.error}>{passwordError}</span>}
        </div>
        <div className={style.formButton}>
          <button type="submit" className={style.formButtonItem}>Login</button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
