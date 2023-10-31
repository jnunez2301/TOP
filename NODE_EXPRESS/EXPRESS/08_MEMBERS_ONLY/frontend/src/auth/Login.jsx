import { Link } from "react-router-dom"
import UserForm from "../hooks/userForm";


const Login = () => {

  const { onLoginChange, handleLogin } = UserForm();



   
  
  return (
    <section>
      <ul>
        <li>
          <form onSubmit={ handleLogin } className="login-form">
            <label htmlFor="username">Username</label>
            <input 
            onChange={onLoginChange}
            type="text" name="username" 
            id="username" 
            placeholder="Your username/nickname"
            required/>

            <label htmlFor="password">Password</label>
            <input
             type="password" name="password" 
             id="password" 
             onInput={ onLoginChange }
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