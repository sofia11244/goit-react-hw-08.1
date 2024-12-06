import { useDispatch, useSelector } from 'react-redux';
import { setToken } from '../../redux/actions/tokenActions';
import { persistToken } from '../../redux/redux-persist';
import { setEmail, setPassword, clearForm } from '../../redux/auth/authSlice';
import style from './LoginForm.module.css';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.auth.email);
  const password = useSelector((state) => state.auth.password);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Örnek doğrulama işlemi (e-posta ve şifre kontrolü)
    if (email === 'test@example.com' && password === 'password123') {
      // Token oluşturma
      const token = 'example-token'; // Gerçek API'de token buradan alınır
      dispatch(setToken(token));
      await persistToken(token);
      console.log('token', token);
      // Başarılı giriş sonrası yönlendirme
      navigate('/');
    } else {
      console.error('Invalid login credentials');
    }

    // Formu temizleme
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
          className={style.formAltInput}
        />
      </div>
      <div className={style.formAlt}>
        <label className={style.formAltLabel}>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => dispatch(setPassword(e.target.value))}
          className={style.formAltInput}
        />
      </div>
      <div className={style.formButton}>
      <button className={style.formButtonItem} type="submit">Login</button>
      </div>
    </form>
    </div>
  );
};

export default LoginForm;
