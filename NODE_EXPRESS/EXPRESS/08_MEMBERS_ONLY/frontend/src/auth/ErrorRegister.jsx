import { Link } from "react-router-dom"

const ErrorRegister = () => {

  

  return (
    <section className="success-page">
       
            <div>
                <p>ERROR!</p>
                
            </div>
            <div className="success-circle" style={{backgroundColor: 'red'}}>
              <div className="success-text">ERROR!</div>
            </div>
            <ul>
              
              <li><Link to='/login'>Log In</Link></li>
              <li><Link to='/'>Go Back Home</Link></li>
            </ul>
              
    </section>
  )
}

export default ErrorRegister