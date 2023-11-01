
import { useAuth } from "../context/AuthContext"
import Messages from "./Messages"
import MessagesForm from "./MessagesForm"

const MainPage = () => {

  const {isAuthenticated} = useAuth();

  return (
    <>
      <section className="container">
        {isAuthenticated ? <MessagesForm /> : 
        <h2 className="no-logged">Sign in to upload <strong>Messages</strong></h2>}
        <Messages />
      </section>
    </>
  )
}

export default MainPage