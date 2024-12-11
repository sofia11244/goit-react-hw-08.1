import { useDispatch, useSelector } from 'react-redux';
import { setToken } from '../../redux/actions/tokenActions';
import { persistToken } from '../../redux/redux-persist';
import { setEmail, setPassword, clearForm } from '../../redux/auth/authSlice';
import style from './LoginForm.module.css';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const email = useSelector((state) => state.auth.email);
  const password = useSelector((state) => state.auth.password);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Token doğrulama simülasyonu (Kendi backend API'nizle değiştirin)
    const mockToken = 'mock-auth-token'; // Burada API'den dönen token olmalı
    if (email === 'test@example.com' && password === 'password123') {
      
      // Giriş başarılı, token'ı kaydet
      dispatch(setToken(mockToken));
      await persistToken(mockToken); 
      navigate('/'); 
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
