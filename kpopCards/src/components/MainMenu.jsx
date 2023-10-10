import Cards from "./Cards"

const MainMenu = () => {
  return (
    <div className="menu-container">
      <h1>K-Pop Card Game!</h1>
      <p>Want to prove how much do you know the members of your favorite group?</p>
      <h2>Select Group</h2>
      <Cards />
    </div>
  )
}

export default MainMenu