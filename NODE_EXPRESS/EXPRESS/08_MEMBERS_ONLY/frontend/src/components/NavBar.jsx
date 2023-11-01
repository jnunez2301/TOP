import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext";

const NavBar = () => {

  const { isAuthenticated, userData, logOut } = useAuth();

  

  return (
    <nav>
      <ul>
        <li>
          <Link to='/' >MMC</Link>
        </li>
        <li>
        {
          isAuthenticated ? 
          <div className="user-nav">
            <Link className="main-user" to={`/user/${userData}`}>{ userData }</Link>
            <Link to='logout' onClick={() => logOut()}>Log Out</Link>
          </div> :
          <>
          <Link to='login' >Login</Link>
          <Link to='signup' >Sign Up</Link>
          </> 
        }
        </li>
      </ul>
    </nav>
  )
}

export default NavBar