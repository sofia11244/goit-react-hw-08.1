// import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../App.css';
import ContactPage from '../pages/Contacts.jsx';
import LoginPage from '../pages/Login';
import RegistrationPage from '../pages/Registration';

// import Login from '../pages/Login.jsx';
// import PrivateRoute from '../private/PrivateRoute';
function App() {
  

  return (


    <div>
      <h1>Phonebook</h1>
      <LoginPage  />
      <RegistrationPage/>
      <ContactPage  />

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
