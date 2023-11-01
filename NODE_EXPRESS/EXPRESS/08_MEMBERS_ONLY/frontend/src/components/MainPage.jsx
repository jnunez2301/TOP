
import { useAuth } from "../context/AuthContext"
import Messages from "./Messages"
import MessagesForm from "./MessagesForm"
import NavBar from "./NavBar"

const MainPage = () => {

  const {isAuthenticated} = useAuth();

  return (
    <>
      <NavBar />
      <section className="container">
        {isAuthenticated ? <MessagesForm /> : <p>Sign in to upload contribute</p>}
        <Messages />
      </section>
    </>
  )
}

export default MainPage