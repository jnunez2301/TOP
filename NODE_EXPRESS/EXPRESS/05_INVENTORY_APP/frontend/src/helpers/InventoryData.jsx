import axios from 'axios'
import { useState, useEffect } from 'react'

const InventoryData = () => {
    const [products, setProducts] = useState([]);

    const [brands, setBrands] = useState([])

    const baseURL= 'http://localhost:3000/api/products';

    useEffect(() => {
        axios.get(baseURL)
        .then(response => {
            setProducts([...response.data]);
        })
        .catch(error => console.log(error))
    }, []);
    
    useEffect(() =>{
        axios.get(`http://localhost:3000/api/products/brands`)
        .then(response => {
            
            setBrands([...response.data])
        })
        .catch(error => console.log(error))
    }, [])
    
  return { products, brands }
}

export default InventoryData