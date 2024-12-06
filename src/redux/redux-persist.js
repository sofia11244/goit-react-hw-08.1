import storage from 'redux-persist/lib/storage';

// Token'ı saklamak için fonksiyon
export const persistToken = async (token) => {
  if (token) {
    await storage.setItem('authToken', token); // Token'ı saklıyoruz
  } else {
    await storage.removeItem('authToken'); // Token yoksa kaldırıyoruz
  }
};

// Token'ı almak için fonksiyon
export const getTokenFromStorage = async () => {
  const token = await storage.getItem('authToken'); // Token'ı alıyoruz
  return token;
};