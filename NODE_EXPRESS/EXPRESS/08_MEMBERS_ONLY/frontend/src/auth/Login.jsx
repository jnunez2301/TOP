import { Link } from "react-router-dom"
import UserForm from "../hooks/userForm";


const Login = () => {

  const { onLoginChange, handleLogin, failedLogin } = UserForm();

 

   
  
  return (
    <section
    className="form-section">
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
            
            { 
            !failedLogin ? '' : 
            <span className="register-error">
              username or password are incorrect
            </span>
            }

            <label htmlFor="password">Password</label>
            <input
             type="password" name="password" 
             id="password" 
             onInput={ onLoginChange }
            placeholder="Your password"
            required/>

            
{ 
            !failedLogin ? '' : 
            <span className="register-error">
              username or password are incorrect
            </span>
            }

            <button
            className="btn-submit"
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