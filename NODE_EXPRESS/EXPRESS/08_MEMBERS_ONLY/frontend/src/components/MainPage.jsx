import Messages from "./Messages"
import MessagesForm from "./MessagesForm"
import NavBar from "./NavBar"

const MainPage = () => {
  return (
    <>
      <NavBar />
      <section className="container">
        <Messages />
        <MessagesForm />
      </section>
    </>
  )
}

export default MainPage