import { useDispatch, useSelector } from 'react-redux';
import { setName, setEmail, setPassword, setConfirmPassword, setError, clearForm } from '../../redux/auth/authSlice';
import style from '../public/RegistrationForm.module.css';
const RegistrationForm = () => {
  const dispatch = useDispatch();
  const { name, email, password, confirmPassword, error } = useSelector((state) => state.auth);

  // Form verilerini güncelleme fonksiyonu
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') dispatch(setName(value));
    if (name === 'email') dispatch(setEmail(value));
    if (name === 'password') dispatch(setPassword(value));
    if (name === 'confirmPassword') dispatch(setConfirmPassword(value));
  };

  // Form gönderildiğinde çalışacak fonksiyon
  const handleSubmit = (e) => {
    e.preventDefault();

    // Şifre doğrulama kontrolü
    if (password !== confirmPassword) {
      dispatch(setError('Şifreler uyuşmuyor!'));
      return;
    }

    // Basit form verisi kontrolü (e-posta formatı vs. gibi)
    if (!name || !email || !password) {
      dispatch(setError('Lütfen tüm alanları doldurun!'));
      return;
    }

    // Hata temizleme
    dispatch(setError(''));

    // Burada API isteği veya başka işlemler yapılabilir
    console.log('Kullanıcı verileri gönderildi:', { name, email, password });

    // Formu sıfırlama
    dispatch(clearForm());
  };

  return (
    <div>
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
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button className={style.formButton} type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
