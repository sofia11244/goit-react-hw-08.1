import '../App.css';
import { Link } from 'react-router-dom';
// import LoginPage from '../pages/Login';
// import RegistrationPage from '../pages/Registration'; 

function PublicHome() {
    return (
        <div style={{border:"solid black 1px"}}>
          <h1>Public</h1>
          <Link to="/login">
            <button>Login</button>
          </Link>
          <Link to="/registration">
            <button>Register</button>
          </Link>
    
        </div>
      );
    }

export default PublicHome;
