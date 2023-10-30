import { Link } from "react-router-dom"

const SuccessRegister = () => {

  

  return (
    <section className="success-page">
       
            <div>
                <p>You have registered</p>
            </div>
            <div className="success-circle">
              <div className="success-text">Registered!</div>
            </div>
            <ul>
              <li><Link to='/login'>Log In</Link></li>
              <li><Link to='/'>Go Back Home</Link></li>
            </ul>
              
    </section>
  )
}

export default SuccessRegister