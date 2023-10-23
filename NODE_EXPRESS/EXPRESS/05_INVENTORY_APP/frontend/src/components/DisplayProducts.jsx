import { useContext } from "react";
import { Context } from "../context/InventoryContext";
import NavBar from "./NavBar";


const DisplayProducts = () => {

  const value = useContext(Context);
  
  const products = value().products;

  /* console.log(products); */
  
  
  
  return (
    <section>
      <NavBar />
      {
       products.length > 0 ? products.map(product => product.model) : 'Loading...'
      }
      
    </section>
  )
}

export default DisplayProducts