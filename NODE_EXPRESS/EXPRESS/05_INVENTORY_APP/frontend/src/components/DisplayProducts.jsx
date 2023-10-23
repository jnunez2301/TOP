import { useContext } from "react";
import { Context } from "../context/InventoryContext";


const DisplayProducts = () => {

  const value = useContext(Context);
  
  const products = value();

  console.log(typeof products);
  

  console.log(products);
  return (
    <div>
      display
      {/* {products && products.map(product => {product.model})} */}
    </div>
  )
}

export default DisplayProducts