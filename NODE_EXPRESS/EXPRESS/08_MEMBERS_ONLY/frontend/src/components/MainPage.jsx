
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
        <Messages />
        {isAuthenticated ? <MessagesForm /> : <p>Sign in to upload contribute</p>}
      </section>
    </>
  )
}

export default MainPage