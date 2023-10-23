import { useContext } from "react"
import NavBar from "./NavBar"
import { Context } from "../context/InventoryContext"

const HomePage = () => {

  const value = useContext(Context);

  const products = value();

  //Filter by unique names on brands
  const filteredBrands = [...new Set(products.brands.map(b => b.name))];

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
    <p>Brands: {filteredBrands.length}</p>
    </>
  )
}

export default HomePage