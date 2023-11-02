import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext";

const NavBar = () => {

  const { isAuthenticated, userData, logOut } = useAuth();

  
  
  return (
    <nav>
      <ul>
        <li>
          <Link to='/' className="title">
            <img src="/logo.png" alt="page-logo" className="nav-logo" />
          </Link>
        </li>
        
        {
          isAuthenticated ? 
            <>
            <li><Link className="main-user" to={`/user/${userData}`}>{ userData }</Link></li>
            <li>
              <Link to='logout' onClick={() => logOut()}>
                Log Out
                </Link></li>
            </>
            
           :
          <>
          <Link to='login' >Login</Link>
          <Link to='signup' >Sign Up</Link>
          </> 
        }
        
      </ul>
    </nav>
  )
}

export default NavBar