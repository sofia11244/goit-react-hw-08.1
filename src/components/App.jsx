// import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../App.css';

import { useSelector } from 'react-redux';
import PrivateHome from '../pages/Home';
import PublicHome from '../pages/OpenHome';
import { Route, Routes } from 'react-router-dom';
import LoginPage from '../pages/Login';
import RegistrationPage from '../pages/Registration';
import Contact from '../pages/Contacts';

function App() {
  const token = useSelector((state) => state.auth.token) || null;

  return (
    <div className="App">
      <Routes>

      {/* <Route path="/" element={token ? <PublicHome/> : <PrivateHome />} /> */}
{/* yukarıdaki eğer contacts stilize etmek istersen */}


        <Route path="/" element={token ? <PrivateHome /> : <PublicHome/>} />
        <Route path="/private" element={<PrivateHome />} />
        <Route path="/contacts" element={<Contact/>} />


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
