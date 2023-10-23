import { useContext } from "react"
import NavBar from "./NavBar"
import { Context } from "../context/InventoryContext"

const HomePage = () => {

  const value = useContext(Context);

  const products = value().products;

   

    //You should be using filter to find how many of one type of product you are receiving
    //Or take advantage of the find method we did on the backend

  return (
    <>
     <NavBar />
     <h2>Home Page</h2>
    </>
  )
}

export default HomePage