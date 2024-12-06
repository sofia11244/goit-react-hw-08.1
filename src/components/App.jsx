// import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../App.css';

import { useSelector } from 'react-redux';
import PrivateHome from '../pages/Home';
import PublicHome from '../pages/OpenHome';
import { Route, Routes } from 'react-router-dom';
import LoginPage from '../pages/Login';
import RegistrationPage from '../pages/Registration';


// import Login from '../pages/Login.jsx';
// import PrivateRoute from '../private/PrivateRoute';
function App() {
  const token = useSelector((state) => state.auth.token) || null;

  return (
    <div>
      <Routes>
        {/* Koşullu olarak özel veya genel ana sayfa */}
        <Route path="/" element={token ? <PrivateHome /> : <PublicHome />} />
        <Route path="/public" element={<PublicHome />} />
        {/* Diğer rotalar */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
      </Routes>
    </div>

      

    // <Router>
    //   <div>
    //     <h1>Phonebook</h1>
    //     <Routes>
    //       <PrivateRoute
    //         path="/contacts"
    //         element={<ContactPage />}  // Protected route
    //       />
    //       <Route path="/login" element={<LoginPage />} />  // Login page
    //     </Routes>
    //   </div>
    // </Router>
    
  );
}

export default App;
