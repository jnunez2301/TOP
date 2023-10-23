import axios from 'axios'
import { useState, useEffect } from 'react'


const InventoryData = () => {
    const [products, setProducts] = useState([]);

    const [brands, setBrands] = useState([]);

  

    const baseURL= 'http://localhost:3000/api/products';

    useEffect(() => {
        axios.get(baseURL)
        .then(response => {
            setProducts([...response.data]);
        })
        .catch(error => console.log(error))
    }, []);
    
    useEffect(() =>{
        axios.get(`${baseURL}/brands`)
        .then(response => {
            
            setBrands([...response.data])
        })
        .catch(error => console.log(error))
    }, [])

    function postData (formData){
        axios.post(baseURL, {
            model: formData.model,
            brand: {
                name: formData.brand,
                description: formData.brandDescription,
                brandIMG: formData.brandIMG,
            },
            description: formData.description,
            price: formData.price,
            imgURL: formData.imgURL
        })
        .then(response => console.log(response))
        .catch(error => console.log(error))
    }
  return { products, brands, postData }
}

export default InventoryData