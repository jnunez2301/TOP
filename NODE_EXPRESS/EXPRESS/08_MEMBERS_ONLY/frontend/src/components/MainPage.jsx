import JoinTheClub from "../auth/JoinTheClub";
import { useAuth } from "../context/AuthContext"
import Messages from "./Messages"
import MessagesForm from "./MessagesForm"


const MainPage = () => {

  const {isAuthenticated} = useAuth();

  return (
    <>
      <section className="container">
        {isAuthenticated ?
        <>
         <MessagesForm />
         <Messages />
         </>
          : 
        <JoinTheClub/>
        }
        
      </section>
    </>
  )
}

export default MainPage