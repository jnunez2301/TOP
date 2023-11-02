import { useNavigate } from "react-router-dom"

const JoinTheClub = () => {

    const navigate = useNavigate();

    const onLogin = ()  =>{
        navigate('/login');
    }

    const onRegister = () =>{
        navigate('/signup');
    }
  return (
    <section className="join-section">
        <img src="/logo.png" alt="page logo" className="page-logo"/>
        <h2>Members Only Club</h2>
        <div >
            <p>Join Today.</p>
            <div className="join-register">

            
            <button
             className="join-btn-register"
             onClick={onRegister}>Create account</button>
             </div>
        </div>
        <div >
            <h2>Already have an account?</h2>
            <div className="join-login">
            <button
            onClick={onLogin}
            className="join-btn-login"
            >
            Sign In
            </button>
            </div>
        </div>
    </section>
  )
}

export default JoinTheClub