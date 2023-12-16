import axios from 'axios'
import { useEffect, useState } from 'react'


export const PokeInfo = () => {
    const [data, setData] = useState([]);
    const baseURL = `https://pokeapi.co/api/v2/pokemon/?limit=10`
    
    useEffect(() => {
        axios
            .get(baseURL)
            .then(response => setData(response.data.results))
            .catch(error => console.log(error))
        
    }, [])

    return {
        data
    }
}
