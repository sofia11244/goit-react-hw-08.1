import { useDispatch, useSelector } from 'react-redux';
import { setEmail, setPassword, clearForm } from '../../redux/auth/authSlice';
import style from './LoginForm.module.css';

const LoginForm = () => {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.auth.email);
  const password = useSelector((state) => state.auth.password);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Formu gönderme işlemleri
    console.log('Email:', email);
    console.log('Password:', password);
    // Formu temizleme
    dispatch(clearForm());
  };

  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <div className={style.formAlt}>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => dispatch(setEmail(e.target.value))}
          className={style.formAltInput}
        />
      </div>
      <div className={style.formAlt}>
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => dispatch(setPassword(e.target.value))}
          className={style.formAltInput}
        />
      </div>
      <button className={style.formButton} type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
