import { Link } from "react-router-dom"

const Login = () => {
  return (
    <section>
      <ul>
        <li>
          <form className="login-form">
            <label htmlFor="username">Username</label>
            <input 
            type="text" name="username" 
            id="username" 
            placeholder="Your username/nickname"
            required/>

            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" 
            placeholder="Your password"
            required/>

            <button
            className="btn-login"
             type="submit">Log In</button>
          </form>
        </li>
        <li>
          <Link to='/' style={{marginLeft: 0}}>Go back</Link>
        </li>
        <li>
          <p>No account?<Link to='/signup'> Register</Link></p>
        </li>
      </ul>
    </section>
  )
}

export default Login