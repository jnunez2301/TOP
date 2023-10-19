import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Make an Axios GET request to fetch all products from your API
    axios.get('http://localhost:3000/api/products')
      .then((response) => {
        // Update the products state with the data from the API
        setProducts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []);

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <React.Fragment key={product._id}>
          <li>{product.model}</li>
          <img src={product.imgURL} alt={product.model} />
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
