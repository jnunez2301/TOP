import { useContext } from "react"
import NavBar from "./NavBar"
import { Context } from "../context/InventoryContext"

const HomePage = () => {

  const value = useContext(Context);

  const products = value();


    //You should be using filter to find how many of one type of product you are receiving
    //Or take advantage of the find method we did on the backend

  return (
    <>
     <NavBar />
     <h2>Home Page</h2>
     Welcome to PhonesInventory, the place where you find and store all your new favorite Phones, Model and Brands.
     <hr />
     <p>This is app is using mongoDB, Mongoose, Express and NodeJS 
      <br />
      As some might call it this project is a MERN Stack</p>

     <h2>Database contains the following</h2>
    <p>Brands: {products.brands.length}</p>
    </>
  )
}

export default HomePage