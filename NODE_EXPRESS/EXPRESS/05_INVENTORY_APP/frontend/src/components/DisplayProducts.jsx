import React, { useContext } from "react";
import { Context } from "../context/InventoryContext";
import NavBar from "./NavBar";


const DisplayProducts = () => {

  const value = useContext(Context);
  
  const products = value().products;
  
  
  
  return (
    <>
    <section>
      
      {
       products.length > 0 ? products.map(product => 
        (
          <React.Fragment key={product._id}>
            <ul>
              <li className="product">
                <img className="product-img" src={product.imgURL} alt={product.model} />
                <div>
                   <p>
                   Model: {product.model}
                  </p>
                 <p>Price: {product.price}€</p>
                  <p>Brand: {product.brand.name} </p>
                  <p>Description: {product.description}</p>
                </div>                
              </li>
            </ul>
          
          </React.Fragment>
        )) : 'Loading...'
      }
      
    </section>
    </>
  )
}

export default DisplayProducts