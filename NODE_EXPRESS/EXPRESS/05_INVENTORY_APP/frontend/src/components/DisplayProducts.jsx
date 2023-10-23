import React, { useContext, useEffect, useState } from "react";
import { Context } from "../context/InventoryContext";

const DisplayProducts = () => {
  const value = useContext(Context);
  const { products, deleteData } = value();

  const handleDelete = (id) => {
    deleteData(id);
  }

  // Use local state to track the products
  const [displayedProducts, setDisplayedProducts] = useState(products);

  useEffect(() => {
    // Update displayedProducts when products change
    setDisplayedProducts(products);
  }, [products]);

  return (
    <>
      <section className="info-section">
        {displayedProducts.length > 0 ? displayedProducts.map(product => (
          <React.Fragment key={product._id}>
            <ul>
              <li className="product">
                <img className="product-img" src={product.imgURL} alt={product.model} />
                <div>
                  <p>Model: {product.model}</p>
                  <p>Price: {product.price}€</p>
                  <p>Brand: {product.brand.name} </p>
                  <p>Description: {product.description}</p>
                  <button onClick={() => handleDelete(product._id)} className="btn">Delete</button>
                </div>
              </li>
            </ul>
          </React.Fragment>
        )) : 'Loading...'}
      </section>
    </>
  );
}

export default DisplayProducts;
