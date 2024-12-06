import { useDispatch, useSelector } from 'react-redux';
import { setName, setEmail, setPassword, setConfirmPassword, setError, clearForm } from '../../redux/auth/authSlice';
import style from '../public/RegistrationForm.module.css';
import { setToken } from '../../redux/actions/tokenActions';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import { persistToken, getTokenFromStorage } from '../../redux/redux-persist';
import { useState } from 'react';

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { name, email, password, confirmPassword, error } = useSelector((state) => state.auth);

  const [isRegistered, setIsRegistered] = useState(false); // Yeni state: kayıt olup olmadığını kontrol etme

  // Form verilerini güncelleme fonksiyonu
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') dispatch(setName(value));
    if (name === 'email') dispatch(setEmail(value));
    if (name === 'password') dispatch(setPassword(value));
    if (name === 'confirmPassword') dispatch(setConfirmPassword(value));
  };

  // Form gönderildiğinde çalışacak fonksiyon
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Token kaydetme
    const registrationToken = uuidv4();
    persistToken(registrationToken);

    // Şifre doğrulama kontrolü
    if (password !== confirmPassword) {
      dispatch(setError('Passwords do not match!'));
      return;
    }

    // Basit form verisi kontrolü (e-posta formatı vs. gibi)
    if (!name || !email || !password) {
      dispatch(setError('Please fill the form!'));
      return;
    }

    // Hata temizleme
    dispatch(setError(''));

    // Token oluşturma ve kaydetme
    const token = uuidv4();
    dispatch(setToken(token));

    // Kayıt başarılı ise, buton ekle ve isRegistered state'ini true yap
    setIsRegistered(true);

    // Formu sıfırlama
    dispatch(clearForm());

    // Kullanıcıyı yönlendirme işlemi
    const storedToken = await getTokenFromStorage();
    if (storedToken === registrationToken) {
      navigate('/public');
    } else {
      console.error('Token not valid');
    }

    console.log('User registered:', { name, email, password });
  };

  return (
    <div className={style.container}>
      <h1 className={style.title}>Register</h1>

      <form onSubmit={handleSubmit} className={style.form}>
        <div className={style.formAlt}>
          <label className={style.formAltLabel} htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleChange}
            required
            className={style.formAltInput}
          />
        </div>
        <div className={style.formAlt}>
          <label className={style.formAltLabel} htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
            required
            className={style.formAltInput}
          />
        </div>
        <div className={style.formAlt}>
          <label className={style.formAltLabel} htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handleChange}
            required
            className={style.formAltInput}
          />
        </div>
        <div className={style.formAlt}>
          <label className={style.formAltLabel} htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleChange}
            required
            className={style.formAltInput}
          />
        </div>
        <div className={style.formButton}>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <button className={style.formButtonItem} type="submit">Register</button>
        </div>
      </form>

      {/* Kayıt başarılı olduktan sonra gösterilecek buton */}
      {isRegistered && (
        <div className={style.formButton}>
          <p>Registration successful!</p>
          <button onClick={() => navigate('../../contacts')} className={style.formButtonItem}>
            Go to Contacts
          </button>
        </div>
      )}
    </div>
  );
};

export default RegistrationForm;
