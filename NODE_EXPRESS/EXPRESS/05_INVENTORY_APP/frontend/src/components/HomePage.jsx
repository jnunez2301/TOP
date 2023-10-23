import { useContext } from "react"
import { Context } from "../context/InventoryContext"

const HomePage = () => {

  const value = useContext(Context);

  const products = value();

  //Filter by unique names on brands
  const filteredBrands = [...new Set(products.brands.map(b => b.name))];

  return (
    <section className="info-section home">
     
     <h2
     >Home Page</h2>
      <hr />
    <p /* style={{width: '370px'}} */>
       Welcome to PhonesInventory, the place where you find and store all your new favorite Phones, Model and Brands.
    
     This is app is using mongoDB, Mongoose, Express and NodeJS 
      <br />
      As some might call it this project is a MERN Stack</p>

     <h2>Database contains the following</h2>
     <hr />
     <p>Brands: {filteredBrands.length}</p>
     
    </section>
  )
}

export default HomePage