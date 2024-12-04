import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './components/App.jsx';
import { Provider } from 'react-redux';
import { store } from "./redux/store";

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
    </StrictMode>
  </BrowserRouter>
)
