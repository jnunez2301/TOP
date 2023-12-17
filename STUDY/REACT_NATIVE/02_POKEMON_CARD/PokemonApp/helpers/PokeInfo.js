import axios from 'axios'
import { useEffect, useState } from 'react'


export const PokeInfo = () => {
    const [data, setData] = useState([]);
    const baseURL = `https://rickandmortyapi.com/api/character`
    
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
