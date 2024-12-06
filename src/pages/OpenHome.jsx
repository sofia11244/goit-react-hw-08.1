import '../App.css';
import { Link } from 'react-router-dom';
import style from './OpenHome.module.css';

function PublicHome() {
    return (
        <div className={style.button}>

          <div className={style.buttoncontainer} >
            <div className={style.buttonAlt}>
            <Link to="/login">
              <button className={style.buttonAltItem}>Login</button>
            </Link>
            </div>

            <div className={style.buttonAlt}>
            <Link to="/registration">
              <button className={style.buttonAltItem}>Register</button>
            </Link>
            </div>

          </div>
    
        </div>
      );
    }

export default PublicHome;
