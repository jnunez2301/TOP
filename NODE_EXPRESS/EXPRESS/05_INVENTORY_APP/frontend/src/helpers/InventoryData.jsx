import axios from 'axios'
import { useState, useEffect } from 'react'


const InventoryData = () => {
    const [products, setProducts] = useState([]);

    const [brands, setBrands] = useState([]);



    const baseURL = 'http://localhost:3000/api/products';

    useEffect(() => {
        axios.get(baseURL)
            .then(response => {
                setProducts([...response.data]);
            })
            .catch(error => console.log(error))
    }, []);

    useEffect(() => {
        axios.get(`${baseURL}/brands`)
            .then(response => {

                setBrands([...response.data])
            })
            .catch(error => console.log(error))
    }, [])

    function postData(formData) {
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
            .then(response => {
                alert('Phone added')
                console.log(response)
            })
            .catch(error => {
                console.log(error)
                alert('An error ocurred submitting your form')
            })
    }

    function deleteData(id) {
        if (window.confirm('Are you sure you want to delete this Phone?')) {
            axios.delete(`http://localhost:3000/api/products/id/${id}`)
                .then(response => {
                    alert('deleted')
                    console.log(response);
                })
                .catch(error => {
                    alert('There was an error and could not delete')
                    console.log(error);
                })
            setProducts(prevProducts => prevProducts.filter(product => product._id !== id));
        }

    }

    return { products, brands, postData, deleteData }
}

export default InventoryData