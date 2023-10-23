import axios from 'axios'
import { useState, useEffect } from 'react'

const InventoryData = () => {
    const [products, setProducts] = useState(null);

    const baseURL= 'http://localhost:3000/api/products';

    useEffect(() => {
        axios.get(baseURL)
        .then(response => {
            setProducts(response.data);
        })
        .catch(error => console.log(error))
    }, []);

    
  return { products }
}

export default InventoryData