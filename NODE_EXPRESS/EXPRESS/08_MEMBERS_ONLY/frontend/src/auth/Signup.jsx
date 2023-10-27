import { Link } from "react-router-dom"

const Signup = () => {
  return (
    <section>
      <ul>

        <li>
          <form className="register-form">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username"
              placeholder="Type your username..."
              required />

            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email"
              placeholder="Example: email@mail.com"
              required />

            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password"
              placeholder="Type your password"
              required />

            <label htmlFor="confirm-password">Confirm Password</label>
            <input type="text" name="confirm-password" id="confirm-password"
              placeholder="Type your password again"
              required />

            

            <button className="btn-register" type="submit">Register</button>


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