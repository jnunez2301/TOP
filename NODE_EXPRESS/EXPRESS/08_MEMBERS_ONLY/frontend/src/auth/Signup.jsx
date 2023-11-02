import { Link } from "react-router-dom"
import UserForm from "../hooks/userForm";
const Signup = () => {

  const { onRegisterChange, handleRegister, passwordMatch, userExist } = UserForm();
  
 

  

  return (
    <section
    className="form-section">
      <ul>
        <li>
          <form onSubmit={ handleRegister} className="register-form">
            <label htmlFor="username">Username</label>
            <input 
            onChange={ onRegisterChange }
            type="text" name="username" id="username"
              placeholder="Type your username..."
              required />
              { !userExist ? '' : <span className="register-error">user already exists</span>}

            <label htmlFor="email">Email</label>
            <input
            onChange={ onRegisterChange }
             type="email" name="email" id="email"
              placeholder="Example: email@mail.com"
              required />

            <label htmlFor="password">Password</label>
            <input 
            onChange={ onRegisterChange }
            type="password" name="password" id="password"
              placeholder="Type your password"
              required />

            {passwordMatch ? '' : <span className="register-error">passwords must be equal</span>}
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input 
            onChange={ onRegisterChange }
            type="password" name="confirmPassword" id="confirmPassword"
              placeholder="Type your password again"
              required />
            

            

            <button 
            className="btn-submit" type="submit">Register</button>


          </form>
        </li>
        <li>
              <Link style={{
                marginLeft: 0
              }} to='/'>Go back</Link>
            </li>
        <li>
          Already have an account?<Link to='/login'> Login</Link>
        </li>
      </ul>

    </section>
  )
}

export default Signup