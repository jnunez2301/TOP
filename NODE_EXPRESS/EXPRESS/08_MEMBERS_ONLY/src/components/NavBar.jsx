import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/' >Members Only Club</Link>
        </li>
        <li>
        <Link to='login' >Login</Link>
        {/* If user is logged login and signup should be the userName */}
        <Link to='signup' >
        Sign Up
        </Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar